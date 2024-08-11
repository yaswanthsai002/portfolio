import { useState, useEffect } from "react";
import Header from "@components/Header";
import Home from "@components/Home";
import Skills from "@components/Skills";
import Work from "@components/Work";
import Education from "@components/Education";
import Footer from "@components/Footer";
import Contact from "@components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabsList = [
  {
    tabId: "home",
    tabDisplayText: "Home",
  },
  {
    tabId: "skills",
    tabDisplayText: "Skills",
  },
  {
    tabId: "work",
    tabDisplayText: "Work",
  },
  {
    tabId: "education",
    tabDisplayText: "Education",
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId);
  useEffect(() => {AOS.init()}, []);
  return (
    <>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabsList={tabsList}
      />
      <main>
        <Home />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
