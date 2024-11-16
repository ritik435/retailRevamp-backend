import Khata from "../Model/khataModel.js";

export var home = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ message: "Welcome to Khata" });
};

export var getAllKhata = async (req, res) => {
  const userId = req.query.userId;
  const khata = await Khata.find({ userId });
  //   const apiResponse = new ApiResponse({
  //     status: 200,
  //     description: "succesfully done",
  //     result: posts,
  //   });
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(transactions);
  } catch (error) {
    res.send(
      new ApiResponse({ status: 500, description: "unsuccesfully done" })
    );
  }
};

export var getKhata = async (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  console.log(id);
  const khata = await Khata.findOne({ _id: id }); // You can replace `_id` with any other field you want to query

  // const user = await User.findById(id);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: post,
  // });
  if (khata != null) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      res.send(khata);
      console.log(khata);
    } catch (error) {
      res.json({
        status: 500,
        description: "Coulnot able to find transaction",
      });
    }
  } else {
    res.json({
      status: 404,
      description: "Could not found transaction with this id",
    });
  }
};

export var postKhata = async (req, res) => {
  console.log(req.body);
  const khata = new Khata(req.body);
  try {
    await khata.save();
    res.set("Access-Control-Allow-Origin", "*");
    console.log("khata : " + khata);
    res.json(khata.toObject());
  } catch (error) {
    console.log("Error in backing up khata : " + error);
    res.status(500).send("Error in backing up khata : " + error);
  }
};

export var deleteAllKhatas = async (req, res) => {
  const userId = req.query.userId;
  const result = await Khata.deleteMany({ userId });
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send("all khata deleted successfully: " + result);
  } catch (error) {
    res.status(500).send("Error in deleting all transaction : " + error);
  }
};
// export var deletePost = async (req, res) => {
//   const id = req.query.id;
//   console.log(id);
//   const post = await Post.findByIdAndDelete(id);
//   // const apiResponse=new ApiResponse({"status":200, "description":`Post is successfully deleted for ${id}`});
//   if (post != null) {
//     try {
//       res.set("Access-Control-Allow-Origin", "*");
//       res.json({
//         status: 200,
//         description: `Post is successfully deleted for ${id}`,
//       });
//     } catch (error) {
//       res.json({ status: 500, description: "Could not find this post" });
//     }
//   } else {
//     res.json({
//       status: 404,
//       description: "Could not found any post related to this userId",
//     });
//   }
// };
