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
  // const user1 = await User.findById(id);
  const user = await User.findOne({
    $or: [{ name: name }, { email: name }, { phoneNumber: name }],
  }); // You can replace `_id` with any other field you want to query

  // const user = await User.findById(id);
  // const apiResponse = new ApiResponse({
  //   status: 200,
  //   description: "succesfully done",
  //   result: post,
  // });
  console.log(user + " ::: \n user1::: ");
  if (user != null) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      // res.send(
      //   `{id:${user._id},name:${user.name},businessName:${user.businessName},email:${user.email},password:${user.password},phoneNumber:${user.phoneNumber}}`
      // ); // Alternatively, use user.toJSON()
      res.json(user.toObject()); // Alternatively, use user.toJSON()
      console.log(" 222: " + user);
    } catch (error) {
      res.status(500).send("Error in searching for this user " + user);
    }
  } else {
    res.status(400).send("User doesnot exist : " + user);
  }
};

export var postUser = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  // if (req.body == null || req.body.name == null) {
  //   res.status(404).send("Not found");
  //   return;
  // }
  const name = req.body.name;
  // console.log(req.body + " \n " + req.body.name);
  const isUser = await User.findOne({ name });
  console.log(isUser);
  if (isUser != null) {
    console.log("Already exist User : : : " + req.body);
    res.status(400).send("User already exist");
    return;
  }
  const user = new User(req.body);
  // // const apiResponse = new ApiResponse({
  // //   status: 200,
  // //   description: "succesfully done",
  // //   result: user,
  // // });

  try {
    await user.save();
    res.json(user.toObject()); // Alternatively, use user.toJSON()
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
