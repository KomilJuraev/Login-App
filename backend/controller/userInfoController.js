const LoginInfo = require('../models/loginModels');

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await LoginInfo.login(email, password);
        return res.status(200).json({user});
    } catch(error) {
        return res.status(400).json({error: error.message});
    }
}

const signup = async (req, res) => {
    const {name, lastName, email, password} = req.body;
    try {
        const user = await LoginInfo.signup(name, lastName, email, password);
        return res.status(200).json({user});
    } catch(error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {login, signup};