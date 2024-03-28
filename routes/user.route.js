const express = require("express");
const router = express.Router();
const { handleSignIn, handleSignUp, handleLogOut } = require("../controllers/user.controller.js");

//For Get Routes Just Render The SignIn / SignUp Page from Views
router.get("/signin", (req, res) => {
    return res.render("signin");
});
router.get("/signup", (req, res) => {
    return res.render("signup");
});

// Routes
router.post("/signin", handleSignIn);

router.post("/signup", handleSignUp);

router.get("/logout", handleLogOut);

module.exports = router;
