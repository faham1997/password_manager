import { Schema, model, Model } from "mongoose";

export interface IExample {
  name: String;
  age: Number;
}

const exampleSchema = new Schema<IExample>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Example: Model<IExample> = model("Example", exampleSchema);
