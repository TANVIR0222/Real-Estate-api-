const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cloudinary = require("cloudinary").v2;
// require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
};

const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (
      [firstname, lastname, email, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new Error("Please fill in all fields");
    }

    //   image uploade
    cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      async (err, result) => {
        if (err) return res.status(400).json({ msg: err.message });

        //  hash passwod
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
          firstname,
          lastname,
          email,
          password: hashPassword,
          imageurl: result.secure_url,
          imageid: result.public_id,
        });
        //   save user to database
        await newUser
          .save()
          .then(() => {
            res
              .status(201)
              .json({ msg: "User created successfully", user: newUser });
          })
          .catch((err) => {
            res.status(404).json({ msg: err.message });
          });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//
const singin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    // res.status(200).json({msg:"User  found"});

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
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        imageurl: user.imageurl,
        imageid: user.imageid,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// const register = async(req,res) => {
//     res.status(201).json({message : 'ok'})
// }
// const register = async(req,res) => {
//     res.status(201).json({message : 'ok'})
// }
// const register = async(req,res) => {
//     res.status(201).json({message : 'ok'})
// }

module.exports = { register, singin };
