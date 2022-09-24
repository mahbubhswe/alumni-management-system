import Alumni from "../../../../models/Alumni.js";
import connectMongo from "../../../../utils/connectMongo.js";
import nc from "next-connect";
import bcryptjs from "bcryptjs";
import { signToken } from "../../../../utils/auth.js";
const handler = nc();
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    const alumni = await Alumni.findOne({ email: req.query.email });
    if (alumni && bcryptjs.compareSync(req.query.password, alumni.password)) {
      const token = signToken(alumni);
      res.send({
        token,
        _id: alumni._id,
        name: alumni.name,
        id: alumni.id,
        gander: alumni.gander,
        email: alumni.email,
        phone: alumni.phone,
        address: alumni.address,
        maritalStatus: alumni.maritalStatus,
        dateOfBirth: alumni.dateOfBirth,
        vrstyName: alumni.vrstyName,
        dep: alumni.dep,
        batch: alumni.batch,
        passingYear: alumni.passingYear,
        cgpa: alumni.cgpa,
        professionalTitle: alumni.professionalTitle,
        favoritSubject: alumni.favoritSubject,
        expOrFra: alumni.expOrFra,
        currentJob: alumni.currentJob,
        createdAt: alumni.createdAt,
        isVerified: alumni.isVerified,
        isAdmin: alumni.isAdmin,
      });
    } else if (alumni) {
      res.send("Invalid email or password");
    } else {
      res.send("Sorry, no account exists with this email address");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
