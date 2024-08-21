const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./src/mvc/route/studRoute');
const teacherRoutes=require('./src/mvc/route/teachRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
