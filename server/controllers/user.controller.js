import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

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

        res
          .cookie('token', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
          })
          .json({
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
