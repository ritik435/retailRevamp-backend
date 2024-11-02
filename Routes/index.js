import Express from "express";
import * as userController from "../Controller/userController.js";
import * as transactionController from "../Controller/transactionController.js";
import * as khataController from "../Controller/khataController.js";
const router = Express.Router();

router.get("/", userController.home);
// router.get("/get-posts", postController.getAllPost);
router.get("/user", userController.getUser);
router.post("/add-user", userController.postUser);
// router.delete("/delete-post", postController.deletePost);

router.get("/", transactionController.home);
router.get("/get-transactions", transactionController.getAllTransactions);
router.get("/transaction", transactionController.getTransaction);
router.post("/add-transaction", transactionController.postTransaction);
// router.delete("/delete-post", transactionController.deletePost);

router.get("/", khataController.home);
router.get("/get-khata", khataController.getAllKhata);
router.get("/khata", khataController.getKhata);
router.post("/add-khata", khataController.postKhata);
// router.delete("/delete-post", khataController.deletePost);

export default router;
