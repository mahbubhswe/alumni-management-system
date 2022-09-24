import Poll from "../../../models/Poll.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.delete(async (req, res, next) => {
  try {
    await connectMongo();
    await Poll.findByIdAndDelete({ _id: req.query.id });
    res.send("Pole has been deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
