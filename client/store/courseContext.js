'use client';

import { useState, createContext } from 'react';

export const CourseContext = createContext();

function CourseProvider({ children }) {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourse = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://holistique-e-learning.onrender.com/api/course/${id}`
      );
      const data = await response.json();

      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComment = async (comment, formState) => {
    try {
      const response = await fetch(
        `https://holistique-e-learning.onrender.com/api/comment/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comment),
          credentials: 'include',
        }
      );

      const res = await response.json();

      if (res.status === 201) {
        formState(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    course,
    fetchCourse,
    postComment,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}

export default CourseProvider;
