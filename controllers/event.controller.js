const Event = require("../models/event.model");
const Review = require("../models/review.model");

const handleCreateEvent = async (req, res) => {
    const { title, body } = req.body;
    try {
        const event = await Event.create({
            title,
            body,
            createdBy: req.user._id,
        });
        return res.redirect(`/event/${event._id}`);
    } catch (error) {
        return res.render("addEvent", { user: req.user, error: "All fields are mandatory" });
    }
};

const handleGetEvent = async (req, res) => {
    const event = await Event.findById(req.params.id).populate("createdBy");
    const reviews = await Review.find({ eventId: req.params.id }).populate("createdBy");
    return res.render("event", {
        user: req.user,
        event,
        reviews,
    });
};

const handleCreateReview = async (req, res) => {
     
};

const handleDeleteEvent = async (req, res) => {
     
};

const handleRegisterEvent = async (req, res) => {
     
};

const handleLikeReview = async (req, res) => {
     
};

const handleReportReview = async (req, res) => {
     
};

module.exports = {
    handleCreateEvent,
    handleGetEvent,
    handleCreateReview,
    handleDeleteEvent,
    handleRegisterEvent,
    handleLikeReview,
    handleReportReview,
};