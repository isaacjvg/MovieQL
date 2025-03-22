import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    connect(process.env.MONGO_URI || "mongodb://localhost/movies");
    console.log("(+) DB Connected");
  } catch (e) {
    console.error("(!) MongoDB Error", e);
    process.exit(1);
  }
};

connectDB();