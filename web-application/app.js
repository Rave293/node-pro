const express = require('express');
const path = require('path');
const app = express();

// Custom middleware to verify the time of the request
function checkWorkingHours(req, res, next) {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send('<h1>Sorry, the web application is only available during working hours (Monday to Friday, 9 to 17).</h1>');
    }
}

// Apply the middleware to all routes
app.use(checkWorkingHours);

// Set up the static folder for CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Our Services page route
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

// Contact Us page route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
