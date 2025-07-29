// const jwt  = require('jsonwebtoken');
// const User = require('../DB/User.model');


// const secureRoutes = async (req, res, next) => {
//     try {
//         console.log('=== Middleware Debug ===');
//         console.log('Request headers:', req.headers);
//         console.log('Cookies received:', req.cookies);
//         console.log('All cookies:', Object.keys(req.cookies || {}));
//         const token = req.cookies.jwt;
//         console.log('JWT Token:', token);
        
//         if (!token) {
//             console.log('No token found in cookies');
//             return res.status(401).json({ message: 'Unauthorized access - No token' });
//         }
        
//         if (!process.env.JWT_TOKEN) {
//             console.log('JWT_TOKEN environment variable not set');
//             return res.status(500).json({ message: 'Server configuration error' });
//         }
        
//         const verifiedUser = jwt.verify(token, process.env.JWT_TOKEN);
//         console.log('Verified user:', verifiedUser);
        
//         if (!verifiedUser) {
//             console.log('Token verification failed');
//             return res.status(401).json({ message: 'Unauthorized access - Invalid token' });
//         }
        
//         const user = await User.findById(verifiedUser.userId).select('-password');
//         console.log('Found user:', user);
        
//         if (!user) {
//             console.log('User not found in database');
//             return res.status(404).json({ message: 'User not found' });
//         }
        
//         req.user = user;
//         console.log('User set in request:', req.user);
//         next();
//     } catch (error) {
//         console.error('Middleware error:', error);
//         return res.status(501).json({ message: 'Internal server error', error: error.message });
//     }
// }
// module.exports = secureRoutes;