const jwt = require('jsonwebtoken');

const createTokenAndSaveCookie = (userId, res) => {
  console.log('Creating token for userId:', userId);
  console.log('JWT_TOKEN env var exists:', !!process.env.JWT_TOKEN);
  
  if (!process.env.JWT_TOKEN) {
    console.error('JWT_TOKEN environment variable is not set!');
    throw new Error('JWT_TOKEN not configured');
  }
  
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { expiresIn: '5d' });
  console.log('Token created successfully');

  res.cookie('jwt', token, {
    httpOnly: true,          
    secure: false, // Set to false for development (HTTP)
    sameSite: 'lax', // Changed from 'strict' to 'lax' for cross-origin requests
    maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days in milliseconds
    path: '/', // Ensure cookie is available for all paths
  });
  
  console.log('Cookie set successfully');

  return token;
};

module.exports = createTokenAndSaveCookie;
