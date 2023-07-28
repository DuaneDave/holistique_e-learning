const allowedOrigins = () => {
  // const origins = {
  //   origin: 'http://localhost:3000',
  //   credentials: true,
  // };

  const origins = {
    origin:
      'https://holistique-e-learning-git-resourcecenter-duanedave.vercel.app/',
    credentials: true,
  };

  return origins;
};

export default allowedOrigins;
