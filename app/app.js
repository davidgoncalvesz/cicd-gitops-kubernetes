const express = require('express');
const app = express();
const port = 3000;

app.listen(port);
console.log(`App running at http://localhost:${port}`);

app.get('/health', (req, res) => {
  res.send('OK');
  res.status(200);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
