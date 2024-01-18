import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  name: {
    type: String,
  },
  initial: {
    type: String,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (user.name) {
    const nameWords = user.name.split(" ");
    const initials = nameWords
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");
    user.initial = initials;

    console.log("User before save:", user);
  }

  next();
});


export const User = mongoose.models.User || mongoose.model("User", UserSchema);
