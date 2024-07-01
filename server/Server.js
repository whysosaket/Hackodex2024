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

    
    return res.json(repoDetails);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Fetching details of Accepted PRs
app.get('/users/:username/:label', async (req, res) => {
  const { username, label } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/search/issues?q=label:${label}+type:pr+author:${username}+is:merged`, {
      headers: {
      
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const pullRequests = response.data.items;

    const prDetails = pullRequests.map(pr => ({
      title: pr.title,
      url: pr.html_url,
      state: pr.state,
      merged_at: pr.pull_request.merged_at,
      repository: pr.repository_url.split('/').slice(-1)[0], 
      labels: pr.labels.map(label => label.name)
    }));

    
    return res.json(prDetails);
  } catch (error) {
    console.error('Error fetching user pull requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
