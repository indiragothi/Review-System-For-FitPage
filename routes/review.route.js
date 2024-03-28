const express = require("express");
const router = express.Router();
const {
    handleCreateReview,
    handleLikeReview,
    handleReportReview,
    handleResponseReview,
} = require("../controllers/review.controller.js");


// Routes for Reviews
router.post("/:eventId", handleCreateReview);
router.get("/like/:id", handleLikeReview);
router.get("/report/:id", handleReportReview);
router.post("/response/:id", handleResponseReview);

module.exports = router;