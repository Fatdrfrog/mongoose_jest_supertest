import { model } from "mongoose";
import { IUser } from "../interfaces/User";
import { userSchema } from "../schemas/UserS";

userSchema.methods.fight = function fight() {
  const greeting = this.name + " hit you with hammer";
  console.log(greeting);
};
// 3. Create a Model.
export const UserM = model<IUser>("User", userSchema);
