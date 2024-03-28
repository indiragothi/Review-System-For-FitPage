const Event = require("../models/event.model");
const Review = require("../models/review.model");

const handleCreateEvent = async (req, res) => {
    const { title, body } = req.body;
    try {
        const event = await Event.create({
            title,
            body,
            createdBy: req.user?._id,
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
    try {
        await Event.findByIdAndDelete(req.params.id);
        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const handleRegisterEvent = async (req, res) => {
    try {
        const id = req.params.id;

        const event = await Event.findById(id);
        const index = event.registerUser.findIndex((id) => id === String(req.user?._id));

        if (index === -1) {
            event.registerUser.push(String(req.user?._id));
        } else {
            event.registerUser = event.registerUser.filter((id) => id !== String(req.user?._id));
        }
        const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
        return res.status(201).redirect("/");
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
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