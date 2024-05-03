const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.post("/getAuthToken", async (req, res) => {
  try {
    const { code } = req.body;
    console.log("Received code:", code);
    
    const response = await axios.post("https://github.com/login/oauth/access_token", {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: code
    }, {
      headers: {
        "Accept": "application/json"
      }
    });
    
    const data = response.data;
    console.log("Access token:", data.access_token);
    const token = data.access_token;
    console.log(data);
    
    // Send back the access token to the frontend
    res.json({ "token" : token });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
