const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/constants");

const userAuth = (req, res, next) => {
  console.log("userAuth")
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = { userAuth };
