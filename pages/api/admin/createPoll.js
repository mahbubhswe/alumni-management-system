import Poll from "../../../models/Poll.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    const newPoll = new Poll({
      ...req.body,
    });
    await newPoll.save();
    res.send("Pole created successfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
