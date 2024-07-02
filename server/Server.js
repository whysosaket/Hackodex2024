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

app.post("/auth/github/callback", async (req, res) => {
  try {
    const { code } = req.body;
    
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
    const token = data.access_token;

    const user = await get_user(token);
    console.log("User:", user);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userPic = user.avatar_url;
    const userName = user.login;

    return res.json({ "token" : token, "user": { "name": userName, "pic": userPic }});
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
app.get('/api/contributions/:username', async (req, res) => {
  const { username } = req.params;
  const label = "hackodex2024";

  // get token from the request header
  const token = req.headers.authorization.split(' ')[1];

  try {
    const response = await fetch(`https://api.github.com/search/issues?q=label:${label}+type:pr+author:${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    const pullRequests = data.items;

    const prDetails = pullRequests.map(pr => ({
      title: pr.title,
      url: pr.html_url,
      state: pr.state,
      merged_at: pr.pull_request.merged_at,
      repository: pr.repository_url.split('/').slice(-1)[0],
      labels: pr.labels.map(label => label.name),
    }));
    
    let mergedCount = 0;
    for (const pr of prDetails) {
      if (pr.state === 'closed' && pr.merged_at) {
        mergedCount++;
      }
    }

    return res.json({data: prDetails, merged: mergedCount});
  } catch (error) {
    console.error('Error fetching user pull requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


const get_user = async (token) => {
  try {
    const response = await axios.get("https://api.github.com/user", {
      headers: {
        "Authorization": `token ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}