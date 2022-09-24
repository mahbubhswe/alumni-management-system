import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const alumni = await Alumni.find({ isAdmin: false });
    res.send(alumni);
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
