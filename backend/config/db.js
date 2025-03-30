import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, );

      // useNewUrlParser: true,
      // useUnifiedTopology: true, yaha tha ye hata deya kuki errorr aa raha tha is leye or (insert.db mai bhi tha to waha bhi hata deya )

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
