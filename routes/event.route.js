const express = require('express');
const router = express.Router();
const {
    handleCreateEvent ,
    handleGetEvent ,  
    handleDeleteEvent , 
    handleRegisterEvent , 
} = require('../controllers/event.controller.js');


// for Home Page
router.get("/add-new", (req, res) => {
    return res.render("addEvent", {
        user: req.user,
    });
});

// Routes for Events
router.post("/", handleCreateEvent);
router.get("/:id", handleGetEvent);
router.get("/register/:id", handleRegisterEvent);
router.get("/delete/:id", handleDeleteEvent);

module.exports = router;