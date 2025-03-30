import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    requiredUrl: {
      type: String,
      unique: true,
      required: true, // Added required field
    },
    visitHistory: [
      {
        timeStamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true } // Fixed spelling
);

const URL = mongoose.model("URL", urlSchema);

export default URL;
