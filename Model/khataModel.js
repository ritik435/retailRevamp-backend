import { UUID } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const khataSchema = new Schema(
  {
    // UUID khataUserId;
    // String khataUserIdString;
    // String khataSerialNumber;
    // String khataUserName;
    // UUID khataUserImage;
    // int khataBalance;
    // String khataUserPhone;
    // JSONArray khataTransactions;
    khataUserId: {
      type: UUID,
      required: false,
    },
    khataSerialNumber: {
      type: String,
      required: true,
    },
    khataUserIdString: {
      type: String,
      required: true,
    },
    khataUserName: {
      type: String,
      required: true,
    },
    khataBalance: {
      type: Number,
      required: true,
    },
    khataUserPhone: {
      type: String,
      required: false,
    },
    khataUserImage: {
      type: UUID,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { __v: false }
);

const Khata = mongoose.model("Khata", khataSchema);
export default Khata;
