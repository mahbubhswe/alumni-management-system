import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const profileInfo = await Alumni.findOne({ email: req.query.email });
    res.send(profileInfo);
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
