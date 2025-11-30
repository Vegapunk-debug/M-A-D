export const USERS = [
  {
    id: "1",
    name: "Tony Stark",
    // Robert Downey Jr.
    avatar: "https://i.pinimg.com/736x/4b/29/ef/4b29ef6667717ee24327986f498a0bc7.jpg",
    bio: "Expert in Python, NLP, and Operating Systems.",
  },
  {
    id: "2",
    name: "Steve Rogers",
    // Chris Evans
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVADyjDU5rD-2cmKEiCIdYsiE-r7oK44gwDw&s",
    bio: "Specialist in algorithms, data structures, and cybersecurity.",
  },
  {
    id: "3",
    name: "Thor Odinson",
    // Chris Hemsworth
    avatar: "https://i.pinimg.com/originals/94/5d/98/945d98b780c5bc919015cddd63ce6ce2.jpg",
    bio: "Developer skilled in JavaScript and Operating Systems.",
  },
  {
    id: "4",
    name: "Bruce Banner",
    // Mark Ruffalo
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8h9nJhRtZdQpXzoPTKpUGS6--BZSF8wJ-tA&s",
    bio: "Cloud computing and parallel processing researcher.",
  },
  {
    id: "5",
    name: "Natasha Romanoff",
    // Scarlett Johansson
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB3vrjbNUMgmCpt5Mpamh8bqzqZ1IE1Hvat8ZgX0L8olSS-XjXhJ3Vq6uCDs5Swsl7sQ&usqp=CAU",
    bio: "Mobile, database, and web development expert.",
  },
  {
    id: "6",
    name: "Peter Parker",
    // Tom Holland
    avatar: "https://www.itl.cat/pngfile/big/70-705315_amazing-spider-man-1.jpg",
    bio: "React and React Native developer exploring AI.",
  },
  {
    id: "7",
    name: "Thanos",
    // Josh Brolin
    avatar: "https://us-tuna-sounds-images.voicemod.net/a9578831-8332-41ac-8d0b-bf925d2a2123-1692063203019.jpg",
    bio: "Data mining and algorithms specialist.",
  },
];

export const SKILLS = [
  // Tony Stark (id: 1)
  {
    id: "1",
    userId: "1",
    title: "Python",
    description: "I can teach Python programming and real-world applications.",
    category: "Programming",
    type: "teach",
  },
  {
    id: "2",
    userId: "1",
    title: "Natural Language Processing",
    description: "Learn NLP concepts and implementation.",
    category: "AI",
    type: "teach",
  },
  {
    id: "3",
    userId: "1",
    title: "Operating System Design",
    description: "I teach core OS design and concepts.",
    category: "Systems",
    type: "teach",
  },
  {
    id: "4",
    userId: "1",
    title: "Quantum Mechanics",
    description: "Looking for someone who can teach me quantum mechanics.",
    category: "Science",
    type: "learn",
  },
  {
    id: "5",
    userId: "1",
    title: "Biotechnology",
    description: "Want to learn biotechnology and its modern applications.",
    category: "Science",
    type: "learn",
  },

  // Steve Rogers (id: 2)
  {
    id: "6",
    userId: "2",
    title: "Algorithm Design",
    description: "I can teach algorithm design and problem-solving.",
    category: "Programming",
    type: "teach",
  },
  {
    id: "7",
    userId: "2",
    title: "Data Structures",
    description: "Learn core data structures from me.",
    category: "Programming",
    type: "teach",
  },
  {
    id: "8",
    userId: "2",
    title: "Cybersecurity",
    description: "Can teach basics to intermediate cybersecurity concepts.",
    category: "Security",
    type: "teach",
  },
  {
    id: "9",
    userId: "2",
    title: "Python",
    description: "I want to learn Python for automation and AI.",
    category: "Programming",
    type: "learn",
  },
  {
    id: "10",
    userId: "2",
    title: "Robotics",
    description: "Looking for someone to teach robotics.",
    category: "Engineering",
    type: "learn",
  },
  {
    id: "11",
    userId: "2",
    title: "Artificial Intelligence",
    description: "Interested in learning AI concepts.",
    category: "AI",
    type: "learn",
  },

  // Thor (id: 3)
  {
    id: "12",
    userId: "3",
    title: "JavaScript",
    description: "I can teach JavaScript basics and advanced concepts.",
    category: "Programming",
    type: "teach",
  },
  {
    id: "13",
    userId: "3",
    title: "Operating Systems",
    description: "Teach the fundamentals of OS.",
    category: "Systems",
    type: "teach",
  },
  {
    id: "14",
    userId: "3",
    title: "Quantum Mechanics",
    description: "Want to learn quantum mechanics.",
    category: "Science",
    type: "learn",
  },
  {
    id: "15",
    userId: "3",
    title: "Python",
    description: "Looking to learn Python.",
    category: "Programming",
    type: "learn",
  },
  {
    id: "16",
    userId: "3",
    title: "AI",
    description: "Interested in AI learning.",
    category: "AI",
    type: "learn",
  },

  // Bruce Banner (id: 4)
  {
    id: "17",
    userId: "4",
    title: "Cloud Computing",
    description: "I can teach cloud concepts and deployment.",
    category: "Cloud",
    type: "teach",
  },
  {
    id: "18",
    userId: "4",
    title: "Parallel Processing",
    description: "Learn high-performance computing techniques.",
    category: "Systems",
    type: "teach",
  },
  {
    id: "19",
    userId: "4",
    title: "Mobile App Development",
    description: "Looking to learn mobile development.",
    category: "Development",
    type: "learn",
  },
  {
    id: "20",
    userId: "4",
    title: "Database Management",
    description: "I want to learn DBMS concepts.",
    category: "Database",
    type: "learn",
  },

  // Natasha (id: 5)
  {
    id: "21",
    userId: "5",
    title: "Mobile App Development",
    description: "I can teach cross-platform mobile development.",
    category: "Development",
    type: "teach",
  },
  {
    id: "22",
    userId: "5",
    title: "Database Management",
    description: "Teach DBMS and data modeling.",
    category: "Database",
    type: "teach",
  },
  {
    id: "23",
    userId: "5",
    title: "Web Development",
    description: "Learn HTML, CSS, JS, and modern web frameworks.",
    category: "Development",
    type: "teach",
  },
  {
    id: "24",
    userId: "5",
    title: "Cloud Computing",
    description: "Want to learn cloud environments.",
    category: "Cloud",
    type: "learn",
  },
  {
    id: "25",
    userId: "5",
    title: "Parallel Processing",
    description: "Interested in learning parallel computing.",
    category: "Systems",
    type: "learn",
  },

  // Peter Parker (id: 6)
  {
    id: "26",
    userId: "6",
    title: "React",
    description: "I can teach React fundamentals.",
    category: "Web",
    type: "teach",
  },
  {
    id: "27",
    userId: "6",
    title: "React Native",
    description: "Teach mobile app development using React Native.",
    category: "Mobile",
    type: "teach",
  },
  {
    id: "28",
    userId: "6",
    title: "Artificial Intelligence",
    description: "Want to learn AI.",
    category: "AI",
    type: "learn",
  },
  {
    id: "29",
    userId: "6",
    title: "Python",
    description: "Looking to learn Python.",
    category: "Programming",
    type: "learn",
  },

  // Thanos (id: 7)
  {
    id: "30",
    userId: "7",
    title: "Algorithm",
    description: "I can teach algorithm concepts.",
    category: "Programming",
    type: "teach",
  },
  {
    id: "31",
    userId: "7",
    title: "Data Mining",
    description: "Teach data mining fundamentals.",
    category: "Data",
    type: "teach",
  },
  {
    id: "32",
    userId: "7",
    title: "Pandas & JavaScript",
    description: "Looking to learn Pandas and JavaScript.",
    category: "Programming",
    type: "learn",
  },
];