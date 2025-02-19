const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "91d5892ff43fe9c23944bce952e3adbeb4ed895834dfe7caec1f786c62efe95d";
const Credential = require("../model/Credential")

const register = async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const cred = new Credential({ username, password: hashedPassword, role })
    cred.save();
    res.status(201).send(cred);
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const cred = await Credential.findOne({ username });
    if (!cred || !(await bcrypt.compare(password, cred.password))) {
        return res.status(403).send('Invalid username or pw');
    }

    const token = jwt.sign({ username: cred.username, role: cred.role }
        , SECRET_KEY
        , { expiresIn: '1hr' });
    res.json({ token });

};

module.exports = {
    login,
    register
}