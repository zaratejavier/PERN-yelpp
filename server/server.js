require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const app = express();

// app.use(express.json)

//get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  // console.log("route handler ran")
  res.json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys", "betos"]
    }
  })
});

//Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params)
})

//create restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req)
})


const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});



