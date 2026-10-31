const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const authRepository = require(
  "../repositories/authRepository"
);

const registerUser = async (
  name,
  email,
  password
) => {

  const existingUser =
    await authRepository.findUserByEmail(
      email
    );

  if (existingUser) {
    throw new Error(
      "User Already Exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

  const user =
    await authRepository.createUser(
      name,
      email,
      hashedPassword
    );

  return user;

};












const loginUser = async (
  email,
  password
) => {

  const user =
    await authRepository.findUserByEmail(
      email
    );

  if (!user) {
    throw new Error("User Not Found");
  }

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Invalid Credentials"
    );
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  return token;
};



module.exports = {
  registerUser,
  loginUser
};