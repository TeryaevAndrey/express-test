import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

const startServer = () => {
  try {
    app.listen(5000, () => {
      console.log("SERVER STARTED");
    });
  } catch (err) {
    console.log("SERVER ERROR");
    process.exit(1);
  }
};z

app.post("/", (req, res) => {
  console.log("cosasd");
  return res.status(200).json({ message: "OK" });
});

startServer();
