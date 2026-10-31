const authService = require(
  "../services/authService"
);

const register = async (
  req,
  res
) => {
  try {

    const {
      name,
      email,
      password
    } = req.body;

    const user =
      await authService.registerUser(
        name,
        email,
        password
      );

    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
};




const login = async (
  req,
  res
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const token =
      await authService.loginUser(
        email,
        password
      );

    res.status(200).json({
      message: "Login Successful",
      token
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

};

module.exports = {
  register,
  login
};
