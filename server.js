const express = require('express');
const connectDB = require("./db");
const soldierRoutes = require('./routes/soldierRoutes');
require('dotenv').config();
const { PORT } = process.env;


connectDB();

const app = express();

app.use(express.json());

app.use(soldierRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Zuri Training!' });
});

const port = process.env.PORT || PORT;

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});