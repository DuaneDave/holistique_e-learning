const allowedOrigins = () => {
  const origins = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

  if (process.env.NODE_ENV === 'production') {
    return {
      origin: 'https://holistique-e-learning-git-resourcecenter-duanedave.vercel.app/',
      credentials: true,
    };
  }

  return origins;
};

export default allowedOrigins;
