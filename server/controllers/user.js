const bcrypt = require('bcrypt'); // Hash passwords before saving in DB
const jwt = require('jsonwebtoken'); // Authentication

const User = require('../models/user.js');

//Signing in logic
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.SECRET, { expiresIn: "1h" });
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

//Signing up logic
const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`
    });
    const result = await User.create(newUser);
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
    console.log(error);
  }
}

module.exports.signup = signup;
module.exports.signin = signin;