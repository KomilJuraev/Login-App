const LoginInfo = require('../models/loginModels');
const jwt = require('jsonwebtoken');

//This one generates a token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '5m'})
}

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await LoginInfo.login(email, password);
        //create a token
        const token = createToken(user._id)
        let name = user.name;
        return res.status(200).json({email, name, token});
    } catch(error) {
        return res.status(400).json({error: error.message});
    }
}

const signup = async (req, res) => {
    const {name, lastName, email, password} = req.body;
    try {
        const user = await LoginInfo.signup(name, lastName, email, password);
        let createdEmail = user.email;
        return res.status(200).json({ createdEmail });
    } catch(error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {login, signup};