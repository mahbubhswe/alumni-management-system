import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res, next) => {
  try {
    await connectMongo();
    const profileInfo = await Alumni.findOne({ email: req.query.email });
    if (
      profileInfo.phone &&
      profileInfo.gander &&
      profileInfo.address &&
      profileInfo.maritalStatus &&
      profileInfo.dateOfBirth &&
      profileInfo.vrstyName &&
      profileInfo.dep &&
      profileInfo.batch &&
      profileInfo.passingYear &&
      profileInfo.cgpa &&
      profileInfo.professionalTitle &&
      profileInfo.favoritSubject &&
      profileInfo.expOrFra &&
      profileInfo.currentJob &&
      profileInfo.skills &&
      profileInfo.socialLinks
    ) {
      res.send({
        profileData: profileInfo,
        profileStatus: "Completed",
      });
    } else {
      res.send({
        profileData: profileInfo,
        profileStatus: "Not completed",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
