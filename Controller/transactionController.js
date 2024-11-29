import Transaction from "../Model/transactionModel.js";

export var home = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ message: "Welcome to Transaction" });
};

export var getAllTransactions = async (req, res) => {
  const userId = req.query.userId;
  const transactions = await Transaction.find({ userId });
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
export var getTransaction = async (req, res) => {
  const id = req.query.id;
  console.log(`Fetching transaction with ID: ${id}`);

  try {
    // Find the transaction by ID
    const transaction = await Transaction.findOne({ _id: id });

    if (transaction) {
      // Ensure the UUID field is formatted properly if it exists
      if (
        transaction.transactionId &&
        typeof transaction.transactionId === "object" &&
        transaction.transactionId.toString
      ) {
        transaction.transactionId = transaction.transactionId.toString();
      }

      res.set("Access-Control-Allow-Origin", "*");
      res.status(200).json(transaction); // Respond with the transaction
      console.log("Transaction found:", transaction);
    } else {
      // If transaction not found, send a 404 response
      res.status(404).json({
        status: 404,
        description: "Could not find transaction with this ID.",
      });
      console.warn("No transaction found for the given ID.");
    }
  } catch (error) {
    console.error("Error occurred while fetching transaction:", error);

    res.status(500).json({
      status: 500,
      description: "An error occurred while retrieving the transaction.",
    });
  }
};

// export var getTransaction = async (req, res) => {
//   const id = req.query.id;
//   const name = req.query.name;
//   console.log(id);
//   const transaction = await Transaction.findOne({ _id: id }); // You can replace `_id` with any other field you want to query
//   if (transaction != null) {
//     try {
//       res.set("Access-Control-Allow-Origin", "*");
//       res.send(transaction);
//       console.log(transaction);
//     } catch (error) {
//       res.json({
//         status: 500,
//         description: "Coulnot able to find transaction",
//       });
//     }
//   } else {
//     res.json({
//       status: 404,
//       description: "Could not found transaction with this id",
//     });
//   }
// };

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
