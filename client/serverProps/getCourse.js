const getCourses = async () => {
  const response = await fetch('http://localhost:4000/api/course');

  const data = await response.json();

  return data;
};

export default getCourses;
