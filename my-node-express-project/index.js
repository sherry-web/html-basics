const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Route to render the index.ejs file
app.get('/', (req, res) => {
  res.render('index');
});

// New Route: About Page with Dynamic Content
app.get('/about', (req, res) => {
  const projectDescription = "This project is aimed at learning Node.js and Express with EJS.";
  res.render('about', { description: projectDescription });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});