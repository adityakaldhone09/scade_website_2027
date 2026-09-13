const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Enable CORS for API routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// In-memory events database
let events = [
    {
        title: "ZeroDay: Newbie Unveil",
        category: "Inauguration",
        date: "2024-08-12",
        image: "assets/images/events/firstEvent.jpg",
        description: "SCADE Club inaugural symposium at GHRCEM, Pune with keynote sessions on Kali Linux, research patents, and student quiz.",
        type: "past"
    },
    {
        title: "GitHub Bootcamp: Beginner to Expert",
        category: "Source Control",
        date: "2024-09-25",
        image: "assets/images/events/gitEvent.png",
        description: "Hands-on version control seminar by Ms. Sanika Kotigre covering branching, merging, and open-source contributions.",
        type: "past"
    },
    {
        title: "Teacher's Day Faculty Gratitude",
        category: "Social",
        date: "2024-09-25",
        image: "assets/images/events/teachersDayEvent.jpg",
        description: "Celebration honoring faculty mentorship with interactive games and tokens of appreciation under Prof. Swati Gajarlewar.",
        type: "past"
    },
    {
        title: "Campus Technical Treasure Hunt",
        category: "Fun Activity",
        date: "2024-10-15",
        image: "assets/images/events/tresureHuntEvent.jpg",
        description: "Campus-wide cryptographic riddle and problem-solving challenge organized by SCADE event team.",
        type: "past"
    }
];

app.get('/events', (req, res) => {
    res.json(events);
});

app.post('/events', (req, res) => {
    const newEvent = req.body;
    events.unshift(newEvent);
    res.status(201).json(newEvent);
});

// Serve static website files from current directory
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for unknown routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`SCADE Club server running at http://localhost:${port}/`);
});

