// import Express from "express";
// import router from "./Routes/index.js";
// import db from "./Util/mongoose.js";
// import { MongoClient, ServerApiVersion } from "mongodb";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// const app = Express();
// const PORT = 3000;
// // developerritik435; XwoiqmMkYeOMm5sO;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(Express.json());

// app.use("/", router);
// db();
// // //Middleware to parse JSON bodies
// // app.use(express.json());

// // // Sample GET endpoint
// // app.get("/", (req, res) => {
// //   res.send("Hello, welcome to the Ritik's node project");
// // });

// // // Sample GET endpoint
// // app.get("/api/greet", (req, res) => {
// //   res.send("Hello, welcome to the Node.js and Express API!");
// // });

// // // Sample POST endpoint
// // app.post("/api/message", (req, res) => {
// //   const message = req.body.message;
// //   res.json({ receivedMessage: message });
// // });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://127.0.0.1:${PORT}`);
// });

// // Export the Express API
// export default app;

import Express from "express";
import router from "./Routes/index.js";
import db from "./Util/mongoose.js";
import bodyParser from "body-parser";

const PORT = 3000;
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.json());

app.use("/", router);
db();

// app is listening...
app.listen(PORT, () => {
  console.log(`App is listening to http://localhost:${PORT}`);
});

// Export the Express API
export default app;
