import jwt from 'jsonwebtoken';

import Course from '../models/course.js';
import Comment from '../models/comment.js';

const secret = process.env.SECRET;

export const createComment = async (req, res) => {
  const { content, course_id } = req.body;
  const { token } = req.cookies;

  console.log(req.body, token);

  try {
    jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Unauthorized', status: 401 });
      }

      const newComment = new Comment({
        content,
      });

      newComment.user.push(decoded);

      await newComment.save();

      await Course.findByIdAndUpdate(
        course_id,
        { $push: { comments: newComment._id } },
        { new: true }
      );

      res.status(201).json({
        message: 'Comment created successfully',
        status: 201,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const like = async (req, res) => {
  const { comment_id } = req.body;
  const { token } = req.cookies;

  try {
    jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Unauthorized', status: 401 });
      }

      const comment = await Comment.findById(comment_id);

      if (comment.likes.includes(decoded.id)) {
        return res.status(400).json({
          message: 'You already liked this comment',
          status: 400,
        });
      }

      if (comment.dislikes.includes(decoded.id)) {
        await Comment.findByIdAndUpdate(
          comment_id,
          { $pull: { dislikes: decoded.id } },
          { new: true }
        );
      }

      await Comment.findByIdAndUpdate(
        comment_id,
        { $push: { likes: decoded.id } },
        { new: true }
      );

      res.status(200).json({
        message: 'Comment liked successfully',
        status: 200,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const dislike = async (req, res) => {
  const { comment_id } = req.body;
  const { token } = req.cookies;

  try {
    jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Unauthorized', status: 401 });
      }

      const comment = await Comment.findById(comment_id);

      if (comment.dislikes.includes(decoded.id)) {
        return res.status(400).json({
          message: 'You already disliked this comment',
          status: 400,
        });
      }

      if (comment.likes.includes(decoded.id)) {
        Comment.findByIdAndUpdate(
          comment_id,
          { $pull: { likes: decoded.id } },
          { new: true }
        );
      }

      await Comment.findByIdAndUpdate(
        comment_id,
        { $pull: { likes: decoded.id } },
        { new: true }
      );

      res.status(200).json({
        message: 'Comment disliked successfully',
        status: 200,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};
