import User from "../models/userModel.js";
import bcrypt from "bcrypt";

import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    console.log(req.body);

    const { fullName, email, mobileNumber, password } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("ALl Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(!fullName || !email || !mobileNumber || !password);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email Already Exists");
      error.statusCode = 409;
      return next(error);
    }

    console.log("Sending Data to db");

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Password Hashing", hashedPassword);

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    console.log(newUser);
    res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("ALl Fields Required");
      error.statusCode = 400;
      return next(error);
    }
   

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email Not Registered");
      error.statusCode = 401;
      return next(error);
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordMatch) {
      const error = new Error("Password did not match");
      error.statusCode = 401;
      return next(error);
    }
    genToken(existingUser, res);
    res.status(200).json({ message: "Login Successful", data: existingUser });
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};

export const UpdateProfile = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.userId;
    if (!userId) {
      const error = new Error("User not authenticated");
      error.statusCode = 401;
      return next(error);
    }

    const { firstName, lastName, email, phone, address, city, state, zipCode } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName: `${firstName} ${lastName}`,
        email,
        mobileNumber: phone,
        address,
        city,
        state,
        zipCode,
      },
      { new: true }
    );

    if (!updatedUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "Profile updated successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
