
// routes/authRoute.js
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/constants");
const authRoute = express.Router();
const users = new Map(); 
authRoute.post("/register", async (req, res) => {
  try {
    const { numbeID } = req.body;
    const numberID = uuidv4();
    const nummberSecret = crypto.randomBytes(16).toString("hex");
    users.set(numberID, {
     p,
     f,
     e,
    });
    res.status(200).json({
      message: "Registered Successfully",
      numberID,
      numberSecret,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
authRoute.post("/auth", async (req, res) => {
  try {
    const { numberID, numberSecret } = req.body;
    const user = users.get(numberID);

    if (user.numberSecret !== numberSecret) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const access_token = jwt.sign(
      { numberID, },
      SECRET_KEY,
      { expiresIn: "500" }
    );
    res.status(200).json({
      message: "Login Successful",
      token_type: "Bearer",
      access_token,
      expires_in:500,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = { authRoute };
