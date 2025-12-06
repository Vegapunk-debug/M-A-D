<a name="readme-top"></a>
<div align="center">
  <a href="https://drive.google.com/file/d/1LeJYfsvmNM7ObHaHFMIJdd2UU866GHOB/view?usp=sharing" target="_blank">
    <img src="https://img.shields.io/badge/Watch_Demo_Video-FF0000?style=for-the-badge&logo=google-drive&logoColor=white" alt="Watch Demo Video" />
  </a>
</div>

<div align="center">

  <br />
  <img alt="llLogo" src="https://github.com/user-attachments/assets/3237c503-2859-4ca1-94e6-61216ec5e454" width="150" />
  <br />

  <h1>LearnLoop</h1>

  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=3572A5&center=true&vCenter=true&width=500&lines=Learn.+Teach.+Exchange.+Grow.;Connect+with+mentors.;Master+new+skills.;Barter-based+Learning." alt="Typing SVG" />

  <p align="center">
    The community-driven ecosystem creates an endless loop of teaching, learning, and improving.
    <br />
    <!-- <a href="#demo"><strong>View Demo »</strong></a> -->
    <br />
    <br />
    <a href="https://github.com/your-username/learnloop/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-username/learnloop/pulls">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" alt="Expo" />
  <!-- <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" /> -->
  <!-- <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TS" /> -->
</div>

<br />

<details>
  <summary><strong>📝 Table of Contents</strong> (Click to Expand)</summary>
  <ol>
    <li><a href="#-about-the-app">About The App</a></li>
    <li><a href="#-features">Features</a></li>
    <li><a href="#-skill-matching-logic">Matching Logic</a></li>
    <li><a href="#-screenshots">Screenshots</a></li>
    <li><a href="#-installation--setup">Installation</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
  </ol>
</details>

---

##  About the App

**LearnLoop** is a React Native + Expo mobile application designed to democratize education through connection.

> *"Knowledge increases by sharing, not by saving."*

Users can list skills they can **teach** and skills they want to **learn**. Our platform identifies users with complementary interests, facilitating a **free or barter-based** exchange of knowledge.

---

##  Features

<table align="center">
  <tr>
    <td align="center" width="33%">
      <h3>🏠<br/>Smart Home</h3>
      <p>Personalized recommendations based on your learning wishlist.</p>
    </td>
    <td align="center" width="33%">
      <h3>🔍<br/>Explore & Discovery</h3>
      <p>Advanced filtering by skill level, category, and proximity.</p>
    </td>
    <td align="center" width="33%">
      <h3>🤝<br/>Matchmaking</h3>
      <p>Direct barter matching: "I teach Guitar, you teach Spanish."</p>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <h3>👤<br/>Rich Profiles</h3>
      <p>Showcase your expertise with ratings, reviews, and badges.</p>
    </td>
    <td align="center" width="33%">
      <h3>💬<br/>In-App Chat</h3>
      <p>Coordinate lessons securely without leaving the app.</p>
    </td>
    <td align="center" width="33%">
      <h3>📈<br/>Progress Tracking</h3>
      <p>Set goals and track your learning journey.</p>
    </td>
  </tr>
</table>

---

## Skill Matching Logic (Working On it)

We don't just match keywords; we match intents. Here is how the **LearnLoop Algorithm** processes connections:

```mermaid
graph TD;
    A[User A: Wants to Learn 'React'] -->|Search| DB[(Database)];
    B[User B: Can Teach 'React'] -->|List| DB;
    DB -->|Filter: Skill Level| Match{Potential Match?};
    Match -- Yes --> C[Check: Does User A have skills User B wants?];
    C -- Yes --> D[🔥 Perfect Barter Match];
    C -- No --> E[💡 One-way Learning / Community Credit];
    
    style D fill:#f9f,stroke:#333,stroke-width:2px,color:black
    style E fill:#bbf,stroke:#333,stroke-width:2px,color:black
