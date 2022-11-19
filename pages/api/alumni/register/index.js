import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
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
    //check email exist or not
    const isExist = await Alumni.findOne({ email: req.body.email });
    if (isExist) {
      res.send(
        "Sorry, this email address already exists with another account."
      );
    }

    const { name, email, password, createdAt } = req.body;
    await connectMongo();
    const newAlumni = new Alumni({
      name,
      email,
      password: bcryptjs.hashSync(password),
      emailToken: crypto.randomBytes(64).toString("hex"),
      createdAt,
    });
    await newAlumni.save();
    //send mail to user
    const details = {
      from: `Verify your email porijit35-2711@diu.edu.bd`,
      to: newAlumni.email,
      subject: `porijit35-2711@diu.edu.bd -Verify your email`,
      html: `<h2>Thanks for registration</h2>
      <h4>Please verify your email...</h4>
      <a href="http://${req.headers.host}/alumni/verify-email/${newAlumni.emailToken}">Verify your email</a>
      `,
    };
    //send mail
    transporter.sendMail(details, (error) => {
      if (error) {
        console.log(error);
      } else {
        res.send(
          `Thanks for registration.Verification mail has been sent to ${newAlumni.email}. Please check your email to verify your account.`
        );
      }
    });
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
