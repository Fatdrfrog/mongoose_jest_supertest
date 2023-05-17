import { ISkill } from "./Skill";
import { Types } from "mongoose";

export interface IAchievements {
  striker: boolean;
  playerOfTheMonth: boolean;
  wizarded: boolean;
}

export interface IUser {
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  skills?: ISkill[];
  bestFriend?: Types.ObjectId;
  achievements?: IAchievements;
}
