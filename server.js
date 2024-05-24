import express from 'express';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/lostplaces', async (req, res) => {
  try {
    const response = await axios.get(process.env.API_KEY);
    const data = response.data;
    res.render('index1', { data });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
