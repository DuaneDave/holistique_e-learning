import Newsletter from '../models/newsletter.js';

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const foundNewsletter = Newsletter.findOne({ email });

    if (foundNewsletter) {
      return res.status(401).json({
        message: 'You are already subscribed to our newsletter',
        status: 401,
      });
    }

    await Newsletter.create({
      email,
    });

    res.status(201).json({
      message: 'You have successfully subscribe to our email',
      status: 201,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message, status: 500 });
  }
};
