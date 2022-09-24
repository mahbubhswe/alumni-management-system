import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
import bcryptjs from "bcryptjs";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectMongo();
    const isExist = await Alumni.findOne({ email: req.query.email });
    if (isExist) {
      await Alumni.findByIdAndUpdate(
        { _id: isExist._id },
        { password: bcryptjs.hashSync(req.query.password) }
      );
      res.send("Password has been changed successfully. Now you can login");
    } else {
      res.send("Sorry, no account found with this email address");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
