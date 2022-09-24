import Poll from "../../../models/Poll.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.put(async (req, res, next) => {
  try {
    await connectMongo();
    await Poll.findByIdAndUpdate(
      { _id: req.query.id },
      {
        ...req.body,
      }
    );
    res.send("Poll updated successfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
