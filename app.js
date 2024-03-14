const express = require('express');
const app = express();
const path = require('path'); // Import path module for joining directories

// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'views'));

// Set Pug as the view engine
app.set('view engine', 'pug');

// Middleware
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
const indexRouter = require('./routes/index');
const eventsRouter = require('./routes'); // Import events router
app.use('/', indexRouter);
app.use('/events', eventsRouter); // Use events router for events-related routes

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

