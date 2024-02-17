const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/time', async (req, res) => {
  try {
    const response = await fetch('https://timeapi.io/api/Time/current/coordinate?latitude=43.81&longitude=-111.78');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching time:', error);
    res.status(500).json({ error: 'Error fetching time' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});