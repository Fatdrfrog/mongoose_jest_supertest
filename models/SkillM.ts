import { model } from "mongoose";
import { ISkill } from "../interfaces/Skill";
import { skillSchema } from "../schemas/SkillS";

// 3. Create a Model.
export const SkillM = model<ISkill>("Skill", skillSchema);
