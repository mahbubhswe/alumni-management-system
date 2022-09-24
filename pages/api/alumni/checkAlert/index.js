import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const alumni = await Alumni.findOne({ _id: req.query.id });
    if (
      Object.keys(alumni.skills).length == 7 &&
      Object.keys(alumni.socialLinks).length == 4
    ) {
      res.send(null);
    } else {
      res.send(
        "We found incomplete your profile, please complete your profile. It's look like you forgot to add skill or social media link"
      );
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
