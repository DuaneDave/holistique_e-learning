'use client';

import { useState, createContext } from 'react';

export const CourseContext = createContext();

function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/course');
      const data = await response.json();

      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComment = async (comment, formState) => {
    try {
      const response = await fetch(`http://localhost:4000/api/comment/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
        credentials: 'include',
      });

      const res = await response.json();

      if (res.status === 201) {
        formState(false);
        window.location.reload();
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    courses,
    fetchCourses,
    postComment,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}

export default CourseProvider;
