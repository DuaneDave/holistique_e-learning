import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import Course from '../models/course.js';

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isExisting = await User.findOne({ email });

    if (isExisting) {
      console.log(isExisting);
      return res
        .status(400)
        .json({ message: 'User already exists', status: 400 });
    }

    User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.status(201).json({ message: 'User created successfully', status: 201 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: 'Invalid credentials', status: 400 });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: 'Invalid credentials', status: 400 });
    }

    jwt.sign(
      { email, id: foundUser._id, username: foundUser.username },
      secret,
      {},
      (error, token) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: error.message, status: 500 });
        }

        res.cookie('token', token).json({
          id: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          message: 'User logged in successfully',
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token').json({ message: 'User logged out successfully' });
};

export const editProfile = async (req, res) => {
  const { id } = req.params;
  const { email, firstName, lastName, phone } = req.body;

  let newPath = null;

  if (req.file) newPath = req.file.path;

  try {
    const foundUser = await User.findById(id);
    const { token } = req.cookies;

    jwt.verify(token, secret, {}, async (err, decoded) => {
      if (err) throw err;

      await foundUser.updateOne({
        email,
        firstName,
        lastName,
        phone,
        profile_image: newPath,
      });

      res.status(200).json({ message: 'User updated successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export const addCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const { token } = req.cookies;

    jwt.verify(token, secret, {}, async (err, decoded) => {
      if (err) throw err;

      const foundCourse = await Course.findById(id);

      if (decoded.courses.includes(foundCourse._id)) {
        return res.status(400).json({
          message: 'You already added this course',
          status: 400,
        });
      }

      await User.findByIdAndUpdate(
        decoded.id,
        { $push: { courses: foundCourse._id } },
        { new: true }
      );

      res.status(200).json({
        message: 'Course added successfully',
        status: 200,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export const getUser = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized', status: 401 });
  }

  try {
    jwt.verify(token, secret, {}, async (err, decoded) => {
      if (err) throw err;

      const foundUser = await User.findById(decoded.id);

      res.status(200).json({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        firstName: foundUser?.firstName,
        lastName: foundUser?.lastName,
        phone: foundUser?.phone,
        profile_image: foundUser?.profile_image,
        status: 200,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
