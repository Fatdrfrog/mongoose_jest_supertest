import express, { Express } from "express";
import { connect } from "mongoose";
import { UserM } from "./models/UserM";

const app: Express = express();

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  try {
    await connect("mongodb://127.0.0.1:27017/newdbb");
  } catch (e: any) {
    console.error(e.message);
  }
}

app.use(express.json());

app.get("/user", async (req, res) => {
  const user: any = await UserM.find({
    name: "fatdrfrog",
    runValidators: true,
  });

  const friend: any = await UserM.findById("63da58b4945d25ec67539e16");
  user[0].bestFriend = friend._id;
  await friend.fight();
  res.json(user);
  console.log(user);
});

app.post("/user/new", async () => {
  try {
    const user = await UserM.create({
      name: "FAtdrfrog",
      email: "fatdrfrog@asd.com",
      avatar: "https://i.imgur.com/dM7Thhn.png",
      skills: [{ name: "hit", level: 50 }],
    });

    user.createdAt = new Date();
    user.save();
    console.log(user);
  } catch (err: any) {
    console.error(err.message);
  }
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
