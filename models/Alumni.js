import mongoose from "mongoose";
const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  gander: {
    type: String,
    required: true,
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
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  vrstyName: {
    type: String,
    required: true,
  },
  dep: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  passingYear: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  professionalTitle: {
    type: String,
    required: true,
  },
  favoritSubject: {
    type: String,
    required: true,
  },
  expOrFra: {
    type: String,
    required: true,
  },
  currentJob: {
    type: String,
    required: true,
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
