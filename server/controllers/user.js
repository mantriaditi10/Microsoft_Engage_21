const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');

const signin = async (req, res) => {
    //Signing in logic
    const { email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if(!oldUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.SECRET, { expiresIn: "1h" });
        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const signup = async (req, res) => {
    //Signing up logic
    const { email, password, firstName, lastName } = req.body;
    //console.log(req.body);
    try {
        const oldUser = await User.findOne({ email });
        if(oldUser) return res.status(400).json({message: 'User already exists'});
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const newUser = new User({
            email: email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        });
        
        const result = await User.create(newUser);
        //console.log(result);
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({message: 'Something went wrong!'});
        console.log(error);
    }
}

module.exports.signup = signup;
module.exports.signin = signin;