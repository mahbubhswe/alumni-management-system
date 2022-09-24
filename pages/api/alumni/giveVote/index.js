import Poll from "../../../../models/Poll.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    const isVoted = await Poll.find({
      "votes.email": req.body.email,
    });
    if (isVoted) {
      res.send("Vote updated")
    } else {
      res.send("Voted")
    }
  } catch (error) {  res.send(error.message)}
});

export default handler;
