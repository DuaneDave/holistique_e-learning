const getCourses = async () => {
  const response = await fetch(
    'https://holistique-e-learning.onrender.com/api/course'
  );

  const data = await response.json();

  return data;
};

export default getCourses;
