import Transaction from "../Model/transactionModel.js";

export var home = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ message: "Welcome to Transaction" });
};

export var getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId });
  //   const apiResponse = new ApiResponse({
  //     status: 200,
  //     description: "succesfully done",
  //     result: posts,
  //   });
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.send(transactions);
  } catch (error) {
    res.send(
      new ApiResponse({ status: 500, description: "unsuccesfully done" })
    );
  }
};
export var deleteAllTransactions = async (req, res) => {
  const userId = req.query.userId;
  const result = await Transaction.deleteMany({ userId });
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send("all transaction deleted successfully: ");
  } catch (error) {
    res.status(500).send("Error in deleting all transaction : " + error);
  }
};

export var getTransaction = async (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  console.log(id);
  const transaction = await Transaction.findOne({ _id: id }); // You can replace `_id` with any other field you want to query

  // const user = await User.findById(id);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: post,
  // });
  if (transaction != null) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      res.send(transaction);
      console.log(transaction);
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

export var postTransaction = async (req, res) => {
  console.log(req.body);
  const transaction = new Transaction(req.body);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: user,
  // });

  try {
    res.set("Access-Control-Allow-Origin", "*");
    console.log("transaction111 : " + transaction);
    await transaction.save();
    console.log("transaction : " + transaction);
    res.json(transaction.toObject());
  } catch (error) {
    res.status(500).send("Error in backing up transaction : " + error);
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
