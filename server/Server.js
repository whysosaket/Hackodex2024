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
    
    
    return res.json({ "token" : token });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//Fetching all repositories for a specific topic
app.get('/repos/:topic', async (req, res) => {
  const topic = req.params.topic;
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=topic:${topic}`, {
      headers: { 
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const repositories = response.data.items; 
    const repoDetails = repositories.map(repo => ({
      name: repo.name,
      owner: repo.owner.login,
      html_url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      open_issues_count: repo.open_issues_count,
    }));

    
    res.json(repoDetails);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
