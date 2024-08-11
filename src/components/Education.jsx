import Timeline from "@components/Timeline";

const educationList = [
  {
    id: "nxtwave",
    title: "MERN Stack Development Trainee",
    institution: "NxtWave",
    duration: "August 2023 - August 2024",
    location: "Online",
    highlights: [
      "Developed front-end and back-end applications using React JS, Node JS, and Express JS",
      "Gained practical experience with SQLite for database management",
    ],
    logoUrl: "src/assets/nxtwave-logo.jpeg",
    grade: "8.8 CGPA",
  },
  {
    id: "btech",
    title: "B.Tech in Computer Science and Engineering",
    institution: "KKR & KSR Institute of Technology and Sciences",
    duration: "August 2019 - January 2024",
    location: "Guntur, Andhra Pradesh, India",
    highlights: [
      "Proficient in HTML, CSS, JavaScript, and Python",
      "Developed projects using Django, Bootstrap, and C programming",
    ],
    grade: "6.9 CGPA",
  },
  {
    id: "intermediate",
    title: "+2 in Maths, Physics, and Chemistry",
    institution: "Sri Chaitanya Junior College",
    duration: "June 2017 - March 2019",
    location: "Vijayawada, Andhra Pradesh, India",
    highlights: [
      "Focused on core subjects: Mathematics, Physics, and Chemistry",
    ],
    grade: "9.6 GPA",
  },
  {
    id: "highschool",
    title: "10th Grade",
    institution: "Sarada High School",
    duration: "June 2016 - March 2017",
    location: "Parchur, Andhra Pradesh, India",
    highlights: [
      "Completed a broad curriculum including Telugu, Hindi, English, Mathematics, Physics, Biology, Chemistry, and Social Studies",
    ],
    grade: "9.5 GPA",
  },
];

const Education = () => (
  <section
    id="education"
    className="flex flex-col min-h-screen gap-4 p-8"
  >
    <h1 className="text-6xl font-extrabold text-white font-outfit">
      Education
    </h1>
    <Timeline timelineDetails={educationList} />
  </section>
);

export default Education;
