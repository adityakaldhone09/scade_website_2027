# SCADE Club — Official Website

> **Society of Cyber Security Advancements & Data Science Excellence**  
> Department of Computer Science & Engineering (Cyber Security & Data Science)  
> **G H Raisoni College of Engineering and Management (GHRCEM), Pune**  
> Affiliated to Savitribai Phule Pune University (SPPU)

---

## 📌 Overview

**SCADE** is the premier technical student organization at GHRCEM, Pune, operating under the Department of Computer Science & Engineering (Cyber Security & Data Science). The club bridges academic coursework and cutting-edge industrial practices through intensive technical bootcamps, cyber defense labs, competitive CTFs, student research projects, and industry networking.

This repository contains the complete frontend and backend server implementation for the official SCADE website.

---

## ✨ Key Features & Information Architecture

### 1. **Institutional Homepage (`index.html`)**
- **Dynamic Hero Section**: Highlighting the club's academic affiliation, core value proposition, key impact metrics (160+ students mentored, 4+ major events, 2+ industry partnerships), and quick action CTAs.
- **Core Pillars ("What We Do")**: Technical Workshops, Hackathons & CTFs, Student Projects & Patents, Cyber Defense Labs, Data Intelligence, and Community Mentorship.
- **Featured Events Strip**: Direct access to event reports with status indicators.
- **Featured Innovations**: Showcase of student cybersecurity and AI solutions.
- **Leadership Preview**: Highlighting Faculty Coordination and Executive Student Committee.
- **Interactive Gallery Reel**: Fast preview of authentic event photography.
- **Verified Testimonials**: Real member feedback from past presidents and alumni.

### 2. **About Us (`about.html`)**
- Institutional background, departmental vision, and mission statement.
- Strategic objectives: practical Linux & Wireshark training, patent incubation, and research papers.
- Academic leadership and mentorship directory.
- Interactive timeline tracking SCADE's milestone journey from launch to present.

### 3. **Events Hub (`events.html`)**
- Comprehensive schedule with tabbed filtering: **All**, **Past Events**, **Upcoming Events**, **Workshops**, **Cybersecurity**, and **Community**.
- Real-time search bar to filter events by topic, speaker name, or date.
- Dedicated event report pages:
  - **`zeroDayBlog.html`**: ZeroDay: Newbie Unveil (12 Aug 2024) with keynote speeches by Dr. Deepika Ajalkar, Mishra Sir, and 14 event photos.
  - **`githubEvent.html`**: GitHub Bootcamp: Beginner to Expert (25 Sep 2024) led by guest speaker Ms. Sanika Kotigre.
  - **`teachersDayBlog.html`**: Teacher's Day Celebration & Faculty Gratitude (25 Sep 2024).
  - **`treasureHuntBlog.html`**: Campus Technical Treasure Hunt & Problem-Solving Sprint.

### 4. **Student Projects Showcase (`projects.html`)**
- Innovation portfolio categorized by **Cyber Defense**, **Data Science & AI**, and **Security Tools**.
- Real projects with technology stack tags (Python, Scapy, Snort, Scikit-Learn, Power BI, FastAPI, PyTorch, Docker) and GitHub repository links.

### 5. **Leadership & Team Directory (`team.html`)**
- Structured hierarchy:
  - **Faculty Advisory**: Prof. Gayatri Deshmukh (Club Coordinator), Dr. Deepika Ajalkar (HOD CSE - CS & DS), Prof. Swati Gajarlewar (Activity Coordinator).
  - **Executive Student Council**: President, Vice President, Secretary.
  - **Functional Leads**: Technical Lead, Design & Social Lead, Treasurer, Event Management Lead.
  - **Alumni Spotlight**: Past Presidents and foundational members.
- Active GitHub, LinkedIn, and Instagram profile links.

### 6. **Multimedia Gallery (`gallery.html`)**
- Comprehensive archive containing all **35+ real event photographs and official release posters**.
- Category filtering: **All Moments**, **ZeroDay Inauguration**, **GitHub Bootcamp**, **Teacher's Day**, **Official Posters**.
- **Full-Screen Responsive Lightbox**: Zero-dependency viewer with image counter, captions, Previous/Next navigation, keyboard controls (`ArrowLeft`, `ArrowRight`, `Escape`), and backdrop dismiss.

### 7. **Achievements & Milestones (`achievements.html`)**
- Documenting industrial alliances with **Kali.io** and **Wisdom Sprouts**.
- Open-source developer enablement and student patent initiatives.

### 8. **Contact & Community (`contact.html`)**
- Interactive contact form with real-time feedback toast notifications.
- Campus address, official Linktree hub (`linktr.ee/scadeghrcem`), and student FAQ accordion.

### 9. **Member Portal & Admin Dashboard (`login.html`, `signup.html`, `admin/admin.html`)**
- Student account registration and login powered by Firebase Authentication.
- Event management dashboard for authorized coordinators with live statistics and API synchronization.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5 Semantic Markup, Vanilla CSS3 (Custom Design System: `assets/css/scade-core.css`), Modular Vanilla JavaScript (`assets/js/scade-core.js`).
- **UI Libraries**: Bootstrap 5 grid/utilities, FontAwesome 5/6 icons, Google Fonts (`Plus Jakarta Sans` & `Space Grotesk`).
- **Backend / API**: Node.js, Express.js (`server.js`), Body-Parser.
- **Authentication**: Firebase Authentication & Realtime Database.

---

## 📂 Directory Structure

```text
scade_website_2027/
├── index.html                  # Main Institutional Homepage
├── about.html                  # About SCADE, Vision, Mission & Timeline
├── events.html                 # Events Hub with live search & tab filters
├── projects.html               # Student Innovation & Research Showcase
├── team.html                   # Faculty Mentors & Student Leadership
├── gallery.html                # Media Archive with Fullscreen Lightbox
├── achievements.html           # Institutional Milestones & Partnerships
├── contact.html                # Inquiries Form & Campus Location
├── zeroDayBlog.html            # ZeroDay Inaugural Event Report
├── githubEvent.html            # GitHub Bootcamp Seminar Report
├── teachersDayBlog.html        # Teacher's Day Celebration Report
├── treasureHuntBlog.html       # Campus Technical Treasure Hunt Report
├── login.html                  # Member & Coordinator Login
├── signup.html                 # Student Registration Form
├── admin/
│   └── admin.html              # Event Manager Dashboard
├── server.js                   # Express Local Web & API Server
├── package.json                # Project dependencies and npm scripts
├── assets/
│   ├── css/
│   │   ├── scade-core.css      # Unified institutional design system
│   │   └── ...                 # Vendor styles (fontawesome, bootstrap)
│   ├── js/
│   │   ├── scade-core.js       # Navigation, Lightbox, Filters, Search & Toasts
│   │   └── ...                 # Helper utilities
│   └── images/
│       ├── scade-logo.png      # Official SCADE Club Logo
│       ├── Gayatri mam.jpg     # Faculty Coordinator
│       ├── Tejashvi.jpg        # President
│       ├── Harshal.jpg         # Vice President
│       ├── blogs/              # Authentic event photo collections
│       │   ├── Zeroday/        # 15 Inaugural event photos
│       │   ├── GithubEvent/    # 8 Bootcamp photos
│       │   └── TeachersDay/    # 8 Celebration photos
│       └── events/             # Official event release banners
└── README.md                   # Project Documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/adityakaldhone09/scade_website_2027.git
cd scade_website_2027
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Local Server
```bash
npm start
```
*Alternatively, you can run:*
```bash
node server.js
```

### 4. Access the Website
Open your browser and navigate to:
```text
http://localhost:3000/
```

---

## 🔒 Media Integrity Guarantee

All images, banners, event photos, and club logos located within `assets/images/` are authentic historical records of the club's activities and are strictly preserved in their original form and directory paths.

---

## 👥 Club Leadership & Faculty Coordination

- **Campus Director**: Dr. R D Kharadkar
- **Head of Department (CSE - CS & DS)**: Dr. Deepika Ajalkar
- **Activity Coordinator**: Prof. Swati Gajarlewar
- **Club Coordinator**: Prof. Gayatri Deshmukh
- **President**: Tejashvi Tiwari
- **Vice President**: Harshal Badgujar
- **Secretary**: Vedika Dawani
- **Technical Lead**: Chinmay Hardikar
- **Design & Social Lead**: Utkarsh Neel
- **Treasurer**: Neeraj Dase
- **Event Management Lead**: Tanmay Khalekar

---

## 🌐 Official Channels

- **Linktree**: [linktr.ee/scadeghrcem](https://linktr.ee/scadeghrcem)
- **Institution**: [G H Raisoni College of Engineering and Management, Pune](https://ghrcem.raisoni.net/)

---

## 📄 License

This project is maintained for the official use of the **SCADE Club at GHRCEM, Pune**. All rights reserved &copy; 2025.
