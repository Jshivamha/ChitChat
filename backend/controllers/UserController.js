const User = require('../DB/User.model');
const bcrypt = require("bcryptjs")
const createTokenAndSaceCookie = require('../JWT/GenerateToken')
const signUp = async (req, res)=>{
    try {
    const { fullName, email, password, confirmPassword } = req.body;
    console.log(req.body);
    

    // Basic validations
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match!' });
    }

    // Check if user exists          
    const existing = await User.findOne({ email }).lean();
    if (existing) {
      return res.status(409).json({ message: 'User already exists!' });
    }

    const hashPass = await bcrypt.hash(password, 10);
    
    const user = await User.create({ fullName, email,password : hashPass });
    if (user){
      createTokenAndSaceCookie(user._id, res);
      
      return res.status(201).json({
      message: 'User created',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        password:user.password
      },
    });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
const signIn = async (req, res)=>{
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password)
    if (!user || !isMatch) {
      return res.status(409).json({ message: 'user does not exist !' });
    }
    createTokenAndSaceCookie(user._id, res);
    return res.status(201).json({
      message: 'User loged in succesfully !',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

const logOut = async (req, res)=>{

  try {
    await res.clearCookie('token');
    return res.status(200).json({ message: 'User loged out !' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

module.exports = { signUp, signIn, logOut};