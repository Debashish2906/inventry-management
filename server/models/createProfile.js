import mongoose from "mongoose";

const ProfileScahema = mongoose.Schema({
  id: String,
  bname:string,
  address: String,
  eyear: Number,
  clist: Number,
  nproduct: String,
  file: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Profile = mongoose.model("Profile", ProfileScahema);

export default Profile;
