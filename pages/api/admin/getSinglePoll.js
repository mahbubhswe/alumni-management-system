import Poll from "../../../models/Poll.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const poll = await Poll.findOne({ _id: req.query.id });
    if (poll) {
      res.send(poll);
    } else {
      res.send("Pole not found");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
