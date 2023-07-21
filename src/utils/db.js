import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://doctoralinazari4:1234@cluster0.buzueic.mongodb.net/nextlama?retryWrites=true&w=majority").then(console.log("connected"));
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
