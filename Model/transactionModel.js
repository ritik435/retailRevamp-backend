import { Timestamp, UUID } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    // String userName;
    // Timestamp date;
    // Integer balance;
    // Integer totalAmount;
    // Integer amountTransferred;
    // String mode;
    // String paymentType;
    // Boolean isTransaction;
    // String key;
    // UUID khataId;
    // String khataNumber;
    // boolean deleted;
    // boolean edited;
    userName: {
      type: String,
      required: false,
    },
    date: {
      type: Timestamp,
      required: true,
    },
    balance: {
      type: Number,
      required: false,
    },
    totalAmount: {
      type: Number,
      required: false,
    },
    amountTransferred: {
      type: Number,
      required: false,
    },
    mode: {
      type: String,
      required: false,
    },
    paymentType: {
      type: String,
      required: false,
    },
    isTransaction: {
      type: Boolean,
      required: true,
    },
    key: {
      type: String,
      required: false,
    },
    // khataId: {
    //   type: UUID,
    //   required: false,
    // },
    khataNumber: {
      type: String,
      required: false,
    },
    deleted: {
      type: Boolean,
      required: false,
    },
    edited: {
      type: Boolean,
      required: false,
    },
  },
  { __v: false }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
