import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();

handler.get(async (req, res) => {
  try {
    await connectMongo();
    const alumni = await Alumni.findOne({ emailToken: req.query.token });
    if (alumni) {
      await Alumni.findByIdAndUpdate(
        { _id: alumni._id },
        { isVerified: true }
      );
      if (alumni.isVerified) {
        res.send(`Oh! Already verifyed your account!`);
      } else {
        res.send(`Your account has been verifyed successfully!`);
      }
    } else {
      res.send(`Sorry, token has been broken. Please try again!`);
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
