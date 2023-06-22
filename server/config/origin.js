const allowedOrigins = () => {
  const origins = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

  if (process.env.NODE_ENV === 'production') {
    origins.push('https://your-app-name.herokuapp.com');
  }

  return origins;
};

export default allowedOrigins;
