import { Schema, Model, model } from "mongoose";
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);

export interface IPassword {
  site: String;
  email: String;
  epassword: String;
  timestamps: String;
}

const passwordSchema = new Schema<IPassword>(
  {
    site: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    epassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Password: Model<IPassword> = model("Password", passwordSchema);
