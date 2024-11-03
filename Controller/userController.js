import User from "../Model/userModel.js";

export var home = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ message: "Welcome to homepage Yes" });
};

// export var getAllPost = async (req, res) => {
//   const posts = await Post.find({});
//   const apiResponse = new ApiResponse({
//     status: 200,
//     description: "succesfully done",
//     result: posts,
//   });
//   try {
//     res.set("Access-Control-Allow-Origin", "*");
//     res.send(posts);
//   } catch (error) {
//     res.send(
//       new ApiResponse({ status: 500, description: "unsuccesfully done" })
//     );
//   }
// };

export var getUser = async (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  console.log(name + " :::::: id: " + id);
  const user = await User.findOne({
    name: name,
    phoneNumber: name,
    email: name,
  }); // You can replace `_id` with any other field you want to query

  // const user = await User.findById(id);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: post,
  // });
  if (user != null) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      res.send(user);
      console.log(user);
    } catch (error) {
      res.status(500).send("Error in searching for this user");
    }
  } else {
    res.status(400).send("User doesnot exist");
  }
};

export var postUser = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.body == null || req.body.name == null) {
    res.status(404).send("Not found");
    return;
  }
  console.log(req.body + " \n " + req.body.name);
  const isUser = User.findOne({ name: req.body.name });
  console.log(isUser);
  if (isUser != null) {
    console.log("Already exist User : : : " + req.body);
    res.status(400).send("User already exist");
    return;
  }
  const user = new User(req.body);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: user,
  // });

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send("Error in creating a user");
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
