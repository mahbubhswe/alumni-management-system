import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const totalAlumni = await Alumni.find({ isAdmin: false });
    const joinToday = await Alumni.find({
      isAdmin: false,
      createdAt: req.query.date,
    });
    res.send({ totalAlumni: totalAlumni.length, joinToday: joinToday.length });
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
