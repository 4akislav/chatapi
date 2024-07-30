
import mongoose, { Document, Model } from "mongoose";

export interface Chat {
  userName: string;
  chatContent: number;
}

export interface ITodoDocument extends Chat, Document {
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new mongoose.Schema<ITodoDocument>(
  {
    userName: {
      type: String,
      required: true,
    },
    chatContent: {
      type: Number,
      required: true,
    },
  },
  {

    timestamps: true,
  }
);

const Todo: Model<ITodoDocument> =
  mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;