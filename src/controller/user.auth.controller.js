import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
};

export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, image } = req.body;

    if (
      [firstname, lastname, email, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new Error("Please fill in all fields");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      firstname,
      lastname,
      email,
      password: hashPassword,
      image,
    });

    await newUser.save();
    res.status(201).json({ msg: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//
export const singin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = generateToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    res.status(200).json({
      message: "Login ",
      success: true,
      error: false,
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        profileImage: user.image,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ message: " logout  success  " });
  } catch (error) {
    console.log(" login out faild :", error);
    res.status(404).send({ message: "login out faild " });
  }
};

