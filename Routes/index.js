import Express from "express";
import * as userController from "../Controller/userController.js";
import * as transactionController from "../Controller/transactionController.js";
import * as khataController from "../Controller/khataController.js";
const router = Express.Router();

router.get("/user/", userController.home);
// router.get("/user/get-posts", postController.getAllPost);
router.get("/user/user", userController.getUser);
router.post("/user/add-user", userController.postUser);
// router.delete("/delete-post", postController.deletePost);

router.get("/transaction", transactionController.home);
router.get(
  "/transaction/get-transactions",
  transactionController.getAllTransactions
);
router.delete(
  "/transaction/delete-transactions",
  transactionController.deleteAllTransactions
);
router.get("/transaction/transaction", transactionController.getTransaction);
router.post(
  "/transaction/add-transaction",
  transactionController.postTransaction
);
// router.delete("/transaction/delete-post", transactionController.deletePost);

router.get("/khata", khataController.home);
router.get("/khata/get-khata", khataController.getAllKhata);
router.get("/khata/khata", khataController.getKhata);
router.post("/khata/add-khata", khataController.postKhata);
// router.delete("/khata/delete-post", khataController.deletePost);

export default router;
