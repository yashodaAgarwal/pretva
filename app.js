require("dotenv").config();
const express = require('express');
const morgan=require('morgan')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

//My routes
const userRoutes = require("./Routes/User");
app.use(express.static("public"))
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors());

//app.use("/api", authRoutes); 
app.use("/users", userRoutes);

const port = process.env.PORT;
require("dotenv/config");

mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log(`Mongodb connected to ${result.connections[0].name} database`);
    app.listen(port, () => {
      console.log(
        `Server running on ${process.env.NODE_ENV} mode and listening on port ${port}`
      );
    });
  })
  .catch(() => { 
    console.log("DB NOT CONNECTED"); 
  });
   