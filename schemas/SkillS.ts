import { Schema } from "mongoose";
import { ISkill } from "../interfaces/Skill";

// 2. Create a Schema corresponding to the document interface.
export const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
    validate: {
      validator: (v: number) => v % 2 === 0,
      message: (params) => `${params.value} is not an even number :(`,
    },
  },
});
