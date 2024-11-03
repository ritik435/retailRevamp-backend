// import mongoose from "mongoose";
// console.log("MongoDB entered!");
// const username = "developerritik435";
// const password = "thisisyournewpass";
// const cluster = "retailrevamp.23tdi";
// const dbname = "retailRevamp";
// // mongodb+srv://developerritik435:<db_password>@retailrevamp.23tdi.mongodb.net/?retryWrites=true&w=majority&appName=retailRevamp
// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       // "mongodb+srv://developerritik435:thisisyournewpass@retailrevamp.23tdi.mongodb.net/?retryWrites=true&w=majority&appName=retailRevamp"
//       `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
//     );
//     console.log("MongoDB connected!");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };

// export default connectDB;

// // import mongoose from "mongoose";
// // const uri =
// //   "mongodb+srv://developerritik435:<thisisyourpass>@retailrevamp.23tdi.mongodb.net/?retryWrites=true&w=majority&appName=retailRevamp";
// // console.log("MongoDB entered!");

// // const clientOptions = {
// //   serverApi: { version: "1", strict: true, deprecationErrors: true },
// // };

// // async function run() {
// //   try {
// //     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
// //     await mongoose.connect(uri, clientOptions);
// //     await mongoose.connection.db.admin().command({ ping: 1 });
// //     console.log(
// //       "Pinged your deployment. You successfully connected to MongoDB!"
// //     );
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await mongoose.disconnect();
// //   }
// // }
// // run().catch(console.dir);

// // export default run;
import mongoose from "mongoose";

const username = "developerritik435";
const password = "mylifemyrules";
const cluster = "retailrevamp.23tdi.mongodb.net";
const dbname = "retailRevamp";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       // `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`
//       "mongodb+srv://developerritik435:mylifemyrules@retailrevamp.23tdi.mongodb.net/?retryWrites=true&w=majority&appName=retailRevamp"
//     );
//     console.log("MongoDB connected!");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };

const connectDB = async () => {
  // const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;
  const mongoURI =
    "mongodb+srv://developerritik435:mylifemyrules@retailrevamp.23tdi.mongodb.net/retailRevamp?retryWrites=true&w=majority&appName=retailRevamp";

  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Attempt to connect for 5 seconds
      connectTimeoutMS: 10000, // Wait up to 10 seconds to establish a connection
    })
    .then(() => console.log("Connected to MongoDB Atlas successfully"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};
export default connectDB;
