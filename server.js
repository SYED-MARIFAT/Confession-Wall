const express = require('express');
const cors = require('cors');

const app = express();

// IMPORTANT for Render
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy database
let confessions = [];

// GET all confessions
app.get('/api/confessions', (req, res) => {
    res.json(confessions);
});

// POST new confession
app.post('/api/confessions', (req, res) => {
    const { author, text } = req.body;

    const newConfession = {
        id: Date.now(),
        author,
        text,
        likes: 0
    };

    confessions.push(newConfession);
    res.json(newConfession);
});

// LIKE
app.post('/api/confessions/:id/like', (req, res) => {
    const id = parseInt(req.params.id);
    const confession = confessions.find(c => c.id === id);

    if (confession) {
        confession.likes++;
        res.json(confession);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

// DELETE
app.delete('/api/confessions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    confessions = confessions.filter(c => c.id !== id);

    res.json({ success: true });
});

// ROOT route (IMPORTANT)
app.get('/', (req, res) => {
    res.send('Server is running 🚀');
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});