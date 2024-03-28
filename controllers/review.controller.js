const Review = require("../models/review.model.js");

const handleCreateReview = async (req, res) => {
    try {
        await Review.create({
            eventId: req.params.eventId,
            content: req.body.content,
            registrationRating: req.body.registrationRating,
            eventRating: req.body.eventRating,
            breakfastRating: req.body.breakfastRating,
            overallRating: req.body.overallRating,
            createdBy: req.user._id,
        });
        return res.status(201).redirect(`/event/${req.params.eventId}`);
    } catch (error) {
        return res.status(400).redirect(`/event/${req.params.eventId}`);
    }
};

const handleLikeReview = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await Review.findById(id);
        const index = review.likes.findIndex((id) => id === String(req.user._id));

        if (index === -1) {
            review.likes.push(String(req.user._id));
        } else {
            review.likes = review.likes.filter((id) => id !== String(req.user._id));
        }
        const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });
        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

const handleReportReview = async (req, res) => {
    const id = req.params.id;

    try {
        const review = await Review.findById(id);
        const index = review.reports.findIndex((id) => id === String(req.user._id));

        if (index === -1) {
            review.reports.push(String(req.user._id));
        } else {
            review.reports = review.reports.filter((id) => id !== String(req.user._id));
        }
        const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });

        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

const handleResponseReview = async (req, res) => {
    const id = req.params.id;

    try {
        const review = await Review.findById(id);
        const { organizerResponse } = req.body;
        review.organizerResponse.push(organizerResponse);
        const updateReview = await Review.findByIdAndUpdate(id, review, { new: true });

        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

module.exports = {
    handleCreateReview,
    handleLikeReview,
    handleReportReview,
    handleResponseReview,
};