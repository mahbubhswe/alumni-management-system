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
        skills: {
          skill1: req.body.skill1,
          skill2: req.body.skill2,
          skill3: req.body.skill3,
          skill4: req.body.skill4,
          skill5: req.body.skill5,
          skill6: req.body.skill6,
          skill7: req.body.skill7,
        },
      }
    );
    res.send("Your skill added successfully!");
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
