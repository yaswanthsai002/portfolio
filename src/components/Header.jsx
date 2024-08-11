/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = ({ activeTab, setActiveTab, tabsList }) => {
  const [toggleIcon, setToggleIcon] = useState("bars");

  const handleShoworHideNavBar = (tabId) => {
    const navBar = document.getElementById("navBar");
    if (navBar.classList.contains("-top-[1000%]")) {
      navBar.classList.add("top-[80px]");
      navBar.classList.remove("-top-[1000%]");
    } else {
      navBar.classList.add("-top-[1000%]");
      navBar.classList.remove("top-[80px]");
    }
    setActiveTab(tabId);
    setToggleIcon(toggleIcon === "bars" ? "x" : "bars");
  };

  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between h-20 gap-20 p-5 px-4 py-4 bg-background lg:px-8 lg:items-center">
      <a href="#home">
        <h1 className="content-center text-3xl font-medium text-white md:text-5xl font-outfit">
          Portfolio
        </h1>
      </a>
      <nav
        className="absolute left-0 flex flex-col w-full h-[calc(100vh-75px)] md:bg-transparent bg-background transition-all duration-500 ease-in-out -top-[1000%] md:top-0 md:w-[60%] items-start md:h-auto md:justify-between md:items-center md:relative md:flex-row p-4 md:p-0"
        id="navBar"
      >
        <ul className="flex flex-col h-full gap-4 list-none nav-list-container lg:gap-8 md:flex-row md:justify-center md:items-center">
          {tabsList.map((tab) => (
            <li
              key={tab.tabId}
              className={`lg:text-lg nav-link underline-offset-8 ${
                activeTab === tab.tabId ? "text-primary underline" : "hover:underline"
              }`}
              onClick={() => handleShoworHideNavBar(tab.tabId)}
            >
              <a href={`#${tab.tabId}`}>{tab.tabDisplayText}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="flex items-center justify-normal md:hidden"
        onClick={() => handleShoworHideNavBar(null)}
        aria-label={
          toggleIcon === "bars"
            ? "Open navigation menu"
            : "Close navigation menu"
        }
      >
        {toggleIcon === "bars" ? (
          <FaBars className="text-2xl" />
        ) : (
          <FaXmark className="text-2xl" />
        )}
      </button>
    </header>
  );
};

export default Header;
