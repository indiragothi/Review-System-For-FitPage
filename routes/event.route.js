const express = require('express');
const router = express.Router();

const {handleCreateEvent ,
       handleGetEvent , 
       handleCreateReview , 
       handleDeleteEvent , 
       handleRegisterEvent , 
       handleLikeReview , 
       handleReportReview
    } = require('../controllers/event.controller.js');

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

//Routes for Reviews 
router.post('/review/:eventId' , handleCreateReview);
router.get('/review/like/:id' , handleLikeReview);
router.get('/review/report/:id' , handleReportReview);


module.exports = router;