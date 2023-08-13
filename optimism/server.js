const express = require('express');
const axios = require('axios');
const { createServer } = require('http');
const { parse } = require('url');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post(
      'http://localhost:8000/https://github.com/login/oauth/access_token',
      {
        client_id: 'f4e28833abb0a968a476',
        client_secret: 'Y127f7f9e3cbf7d4f01a634759b47a4bf16b9ec5b',
        code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = response.data.access_token;
    res.json({ access_token: accessToken });
  } catch (error) {
    console.error('Error exchanging code for access token:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const server = createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
