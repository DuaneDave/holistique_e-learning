import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = User.findOne({ email });

    if (!foundUser) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    jwt.sign(
      { email, id: foundUser._id, username: foundUser.username },
      secret,
      {},
      (error, token) => {
        if (error) {
          return res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};
