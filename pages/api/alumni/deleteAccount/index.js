import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import {isAuth} from "../../../../utils/auth.js";
import nc from "next-connect";
const handler = nc();
handler.delete(async (req, res, next) => {
  try {
    await connectMongo();
    const alumni = await Alumni.findOne({ email: req.query.email });
    if (alumni) {
      await Alumni.findByIdAndDelete({ _id: alumni._id });
      res.send("Account has been deleted successfully");
    } else {
      res.send("Account not found");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
