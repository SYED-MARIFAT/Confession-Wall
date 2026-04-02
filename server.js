const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Set correct MIME type for service worker
app.get('/service-worker.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.setHeader('Service-Worker-Allowed', '/');
    res.sendFile(path.join(__dirname, 'service-worker.js'));
});

// Set correct MIME type for manifest
app.get('/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
    res.sendFile(path.join(__dirname, 'manifest.json'));
});

// In-memory storage (data resets when server stops)
let confessions = [
    {
        id: 1,
        text: "I love this confession wall idea!",
        author: "Maartin",
        likes: 65,
        liked: false,
        timestamp: new Date()
    }
];

let nextId = 2;

// Routes

// GET all confessions
app.get('/api/confessions', (req, res) => {
    const sorted = confessions.sort((a, b) => b.timestamp - a.timestamp);
    res.json(sorted);
});

// POST a new confession
app.post('/api/confessions', (req, res) => {
    const { author, text } = req.body;

    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Confession text is required' });
    }

    const newConfession = {
        id: nextId++,
        text: text.trim(),
        author: author || 'Anonymous',
        likes: 0,
        liked: false,
        timestamp: new Date()
    };

    confessions.push(newConfession);
    res.status(201).json(newConfession);
});

// LIKE a confession
app.post('/api/confessions/:id/like', (req, res) => {
    const confession = confessions.find(c => c.id === parseInt(req.params.id));

    if (!confession) {
        return res.status(404).json({ error: 'Confession not found' });
    }

    if (!confession.liked) {
        confession.likes++;
        confession.liked = true;
    } else {
        confession.likes--;
        confession.liked = false;
    }

    res.json(confession);
});

// DELETE a confession
app.delete('/api/confessions/:id', (req, res) => {
    const index = confessions.findIndex(c => c.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Confession not found' });
    }

    confessions.splice(index, 1);
    res.json({ success: true });
});

// Serve the HTML file on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║      🎭 CONFESSION WALL SERVER 🎭      ║
    ║                                        ║
    ║   Server running on:                   ║
    ║   fetch("https://confession-wall.onrender.com/api/confessions")                ║
    ║                                        ║
    ║   Open it in your browser!             ║
    ╚════════════════════════════════════════╝
    `);
});
