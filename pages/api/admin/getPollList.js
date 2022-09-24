import Poll from "../../../models/Poll.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const polls = await Poll.find();
    res.send(polls);
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
