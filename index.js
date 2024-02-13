// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');


// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// const port = process.env.PORT || 3000;

// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello, World! welcome to sachin Website' });
//   });

// app.use("/api", require("./routers/api1_router"), require("./routers/api2_router"));

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

require('dotenv').config();
const express = require ("express");
const bodyParser= require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello, World! welcome to sachin Website' });
  });

app.use("/api", require("./routers/api1_router"), require("./routers/api2_router"), require("./routers/api3_router"));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});