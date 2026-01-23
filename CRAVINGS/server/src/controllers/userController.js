export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;

    const currentUser = req.User;
    if (!fullName || !mobileNumber) {
      const error = new Error("Unauthorized user Please LOgin Again");
      error.statusCode = 401;
      return next(error);
    }
    console.log(currentUser);

    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    res
      .status(200)
      .json({ message: "Profile Updated Successfully", data: currentUser });
  } catch (error) {
    console.log(error);
  }
  finally {
    next(error);
  }
};
