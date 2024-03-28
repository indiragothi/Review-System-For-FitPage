// require necessary modules
const express = require("express");  
const path = require("path");  
const dotenv = require("dotenv");  
const cookieParser = require("cookie-parser"); 

// models
const Event = require("./models/event.model"); 

const userRoutes = require("./routes/user.route"); 
const eventRoutes = require('./routes/event.route');

// Middleware for authentication
// const protectRoute = require("./middleware/protectRoute");

// mongoDB Connection
const connectToMongoDB = require("./db/connectToMongoDB");

// Express application instance
const app = express();  
const PORT = process.env.PORT || 8001;

dotenv.config();  

// Set up view engine and views directory
app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", path.resolve("./views")); // Set the views directory

// Middleware for parsing URL-encoded request bodies
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Middleware for parsing cookies

// Routes
app.use("/user", userRoutes);
app.use('/event',eventRoutes);

// Route for rendering the home page
// Route for rendering the home page
app.get("/", async (req, res) => {

    try {
        // Retrieve all events from the database
       const allEvents = await Event.find({});

        // Your existing logic to retrieve events and calculate pagination values
        let eventPerPage = 6;
        let totalPages = Math.ceil(allEvents.length / eventPerPage);

        let currentPage = parseInt(req.query.page) || 1;
        currentPage = Math.max(currentPage, 1);
        currentPage = Math.min(currentPage, totalPages);


        // Render the home page template with the necessary variables
        return res.render("home", {
            user: req.user, // Pass the user object to the view
            events: allEvents,
            currentPage : currentPage,
            eventPerPage : eventPerPage,
            totalPages : totalPages, // Pass the events array to the view
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Internal Server Error");
    } 
});

app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});
