import Course from '../models/course.js';

export const createCourse = async (req, res) => {
  const { title, total_lessons, duration, lessons, cover, transcript } =
    req.body;

  try {
    Course.create({
      title,
      total_lessons,
      duration,
      lessons,
      cover,
      transcript,
    });

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