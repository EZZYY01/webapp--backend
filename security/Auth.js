const jwt = require("jsonwebtoken")
const SECRET_KEY = "91d5892ff43fe9c23944bce952e3adbeb4ed895834dfe7caec1f786c62efe95d";

function authenticateToken(req, res, next) {
    const token = req.header("Authorization")?.split("")[1];
    if (!token) {
        res.status(401).send("Access denied: No token provided")
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY)
        req.user = verified
        next()
    } catch (e) {
        res.status(400).send("Invalid token")
    }
}

// function authorizeRole(role) {
//     return (req, res, next) => {
//         if (req.user.role !== role) {
//             return res.status(403).send("Access Denied: Insufficient Permissions")
//         }
//         next();
//     }
// }

module.exports = { authenticateToken }