
import mongoose,{ Schema, model, connect} from "mongoose";

interface IChat {
  userName: string;
  chatContent: string;
}


export const chatSchema = new Schema({
    userName: { type: String, required: true },
    chatContent: { type: String, required: true }},
  { timestamps: true }
);

const Chat = model<IChat>('Chat', chatSchema)

run().catch(err => console.log(err))

export async function run() {
  await connect(process.env.MONGODB_URI!)

  const chat = new Chat({
    userName: "David",
    chatContent: "Hello donbass"
  });
  await chat.save();

  console.log(chat.userName)
}