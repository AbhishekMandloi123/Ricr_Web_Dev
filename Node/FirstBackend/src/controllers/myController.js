import e from "express";
import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { Fullname, phone, email, password } = req.body;
    if (!Fullname || !phone || !email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      return next(error);
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      const error = new Error("Phone number already exists");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({ Fullname, phone, email, password });
    console.log(newUser);
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const errorMsg = new Error(`${field} already exists`);
      errorMsg.statusCode = 409;
      return next(errorMsg);
    }
    error.statusCode = 500;
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      const err = new Error("User Not Authorized");
      err.statusCode = 401;
      return next(err);
    }

    console.log(existingUser);
    res.status(200).json({ message: "Welcome Back" });
  } catch (error) {
    console.log(error);
    error.statusCode = 500;
    next(error);
  }
};

export const UserLogout = (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
   
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { Fullname, phone, email, password } = req.body;
    if (!email || !password || !Fullname || !phone) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    if (email !== existingUser.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {  
        const error = new Error("Email already exists");
        error.statusCode = 409;
        return next(error);
      }
    }

    if (phone !== existingUser.phone) {
      const phoneExists = await User.findOne({ phone });
      if (phoneExists) {
        const error = new Error("Phone number already exists");
        error.statusCode = 409;
        return next(error);
      }
    }

    existingUser.Fullname = Fullname;
    existingUser.email = email;
    existingUser.phone = phone;
    existingUser.password = password;

    await existingUser.save();

    res
      .status(200)
      .json({ message: "User updated successfully", data: existingUser });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const errorMsg = new Error(`${field} already exists`);
      errorMsg.statusCode = 409;
      return next(errorMsg);
    }
    error.statusCode = 500;
    next(error);
  }
};
