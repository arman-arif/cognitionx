import { hashPassword } from "@/lib/hash-utils";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is not valid",
      ],
      minlength: [3, "Email must be at least 3 characters"],
      maxlength: [100, "Email cannot exceed 100 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 }, { unique: true });

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.password = hashPassword(this.email, this.password);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = function (candidatePassword) {
  const passwordHash = hashPassword(this.email, candidatePassword);
  return this.password === passwordHash;
};

// Method to get user without sensitive data
userSchema.methods.toPublicJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
