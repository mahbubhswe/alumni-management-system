import mongoose from "mongoose";
const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  gander: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  vrstyName: {
    type: String,
  },
  dep: {
    type: String,
  },
  batch: {
    type: String,
  },
  passingYear: {
    type: String,
  },
  cgpa: {
    type: String,
  },
  professionalTitle: {
    type: String,
  },
  favoritSubject: {
    type: String,
  },
  expOrFra: {
    type: String,
  },
  currentJob: {
    type: String,
  },
  skills: {
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },
    skill4: {
      type: String,
    },
    skill5: {
      type: String,
    },
    skill6: {
      type: String,
    },
    skill7: {
      type: String,
    },
  },

  socialLinks: {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
  },

  emailToken: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: { type: String, required: true },
});

const Alumni = mongoose.models.Alumni || mongoose.model("Alumni", alumniSchema);

export default Alumni;
