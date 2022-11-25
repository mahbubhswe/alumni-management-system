import Poll from "../../../../models/Poll.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const chack = await Poll.find();
    res.send(chack);
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
