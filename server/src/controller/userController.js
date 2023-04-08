import model from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    // console.log(req.files);
    let { firstName, lastName, email, phone, password } = req.body;
    if (!firstName) {
      return res.status(400).json("please enter first name");
    }
    if (!lastName) {
      return res.status(400).json("please enter last Name");
    }
    if (!email) {
      return res.status(400).json("please enter email");
    }
    if (!password) {
      return res.status(400).json("please enter password");
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const saveData = await model.create(req.body);
    return res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json("Please enter email address");
    }

    if (!password) {
      return res.status(400).json("Please enter password");
    }

    let User = await model.findOne({ email });
    if (!User) return res.status(401).json("Email or Password is incorrect.");

    let matchPassword = await bcrypt.compare(password, User.password);
    if (!matchPassword)
      return res.status(401).json("Email or Password is incorrect.");
    const token = jwt.sign(
      {
        userId: User._id.toString(),
      },
      "hakunamatata",
      { expiresIn: "1h" }
    );
    // const { newPassword, ...other } = getUser
    // let User = getUser
    // console.log(User)
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ User, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const passwordUpdate = async (req, res) => {
  try {
    let id = req.params.user;
    let { currentPassword, newPassword, confirmPassword } = req.body;
    let matchCurrentFromDatabase = await model.findById(id);

    let matchPassword = await bcrypt.compare(
      currentPassword,
      matchCurrentFromDatabase.password
    );
    if (!matchPassword) {
      return res.status(400).json("current password is incorrect");
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json("password does'nt match");
    }
    const salt = await bcrypt.genSalt(10);
    req.body.newPassword = await bcrypt.hash(req.body.newPassword, salt);

    await model.findByIdAndUpdate(id, { password: req.body.newPassword });

    return res.status(200).json("password upadated successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateProfile = async (req, res) => {
  try {
    let id = req.params.user;
    let file= req.file

     req.body.image=file.path
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    let saveData = await model.findByIdAndUpdate(id, req.body);
    return res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllUser = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}