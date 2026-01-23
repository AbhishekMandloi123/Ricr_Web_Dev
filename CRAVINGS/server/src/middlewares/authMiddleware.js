import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("TOken received in Cookies ", biscut);
    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(tea);
    if (!tea) {
      const error = new Error("Unauthorized user Please LOgin Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(tea);
    if (!verifiedUser) {
      const error = new Error("Unauthorized user Please LOgin Again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;



    next();
  } catch (error) {
    next(error);
  }
};
