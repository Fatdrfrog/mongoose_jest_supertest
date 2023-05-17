import mongoose, { Schema } from "mongoose";
import { IUser, IAchievements } from "../interfaces/User";
import { skillSchema } from "./SkillS";

const achievementsSchema = new Schema<IAchievements>({
  striker: Boolean,
  playerOfTheMonth: Boolean,
  wizarded: Boolean,
});

// 2. Create a Schema corresponding to the document interface.
export const userSchema = new Schema<IUser>({
  name: { type: String, required: true, lowercase: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  avatar: String,
  skills: [skillSchema],
  bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  achievements: achievementsSchema,
});
