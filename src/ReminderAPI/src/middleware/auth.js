'use strict';
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).json({ message: "Usuário não autorizado, token inválido" });
            }
            req.user = user;

            next();
        } catch (error) {
            return res.status(401).json({ message: "Usuário não autorizado, token inválido" });
        }
    } else {
        return res.status(401).json({ message: "Usuário não autorizado, sem token" });
    }
};

module.exports = protect;
