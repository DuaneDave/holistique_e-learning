import { get } from 'mongoose';
import Course from '../models/course.js';
import fs from 'fs';

export const createCourse = async (req, res) => {
  const { title, total_lessons, duration, lessons, cover, transcript } =
    req.body;

  const { path: coverImage } = req.files['cover'][0];
  const { path: file } = req.files['file'][0];

  try {
    const course = new Course({
      title,
      total_lessons,
      duration,
      cover: coverImage,
      transcript,
    });

    const newLesson = { ...JSON.parse(lessons), video: file };

    course.lessons.push(newLesson);

    await course.save();

    res.status(201).json({
      message: 'Course created successfully',
      status: 201,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const addCourseLesson = async (req, res) => {
  const { id } = req.params;
  const { lesson, title, video, duration } = req.body;

  const { path: file } = req.file;

  try {
    await Course.findByIdAndUpdate(
      id,
      {
        $push: {
          lessons: {
            lesson,
            title,
            video: file,
            duration,
          },
        },
      },
      { new: true }
    );

    res.status(201).json({
      message: 'Lesson added successfully',
      status: 201,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('comments');

    res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('comments');

    res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

export const updateCourse = async (req, res) => {
  const { title, total_lessons, duration, lessons, cover, transcript } =
    req.body;

  try {
    await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        total_lessons,
        duration,
        lessons,
        cover,
        transcript,
      },
      { new: true }
    );

    res.status(200).json({
      message: 'Course updated successfully',
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};
