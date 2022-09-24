import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectMongo();
    await Alumni.findByIdAndUpdate({ _id: req.query.id }, { ...req.body });
    res.send("Profile updated successfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
