import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    await Alumni.updateOne(
      { _id: req.query.id },
      {
        socialLinks: {
          facebook: req.body.facebook,
          linkedin: req.body.linkedin,
          twitter: req.body.twitter,
          github: req.body.github,
        },
      }
    );
    res.send("Your social links added successfully!");
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
