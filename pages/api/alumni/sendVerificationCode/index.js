import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
import nodemailer from "nodemailer";
const handler = nc();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "porijit35-2711@diu.edu.bd",
    pass: process.env.emailPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

handler.post(async (req, res) => {
  try {
    await connectMongo();
    //check email exist or not
    const isExist = await Alumni.findOne({ email: req.query.email });
    if (isExist) {
      //send mail to user
      const details = {
        from: `Verify your email porijit35-2711@diu.edu.bd`,
        to: isExist.email,
        subject: `porijit35-2711@diu.edu.bd -Verify your email`,
        html: `<h2>Verification code for reset your password</h2>
        <h4>Verification code: ${req.query.code}</h4>`,
      };
      //send mail
      transporter.sendMail(details, (error) => {
        if (error) {
          console.log(error);
        } else {
          res.send(
            `Verification code has been sent to ${isExist.email}.Please check your email address`
          );
        }
      });
    } else {
      res.send("Sorry, no account found with this email address");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
