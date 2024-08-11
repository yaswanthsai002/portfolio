/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import SocialIcons from "@components/SocialIcons";

const Home = () => (
  <section
    className="flex flex-col justify-between w-full min-h-[calc(100vh-80px)] gap-10 p-5 lg:p-10 lg:gap-6 md:flex-row items-center"
    id="home"
  >
    <div className="flex flex-col items-start justify-center w-full h-full gap-5 lg:w-1/2 lg:gap-8 details-container">
      <h2 className="text-xl lg:text-2xl">Hi, I am</h2>
      <h1
        className="flex text-6xl font-extrabold text-white lg:text-8xl font-outfit"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="750"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        Yaswanth Sai
      </h1>
      <h2 className="text-xl lg:text-2xl">
        I am a{" "}
        <span
          className="text-2xl font-semibold lg:text-5xl text-primary"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Fullstack Developer
        </span>
      </h2>
      <p className="">
        I'm a focused, dynamic person that is constantly ready to take on new
        tasks. I have a strong desire to learn and am committed to doing
        excellent work. I'm ready to make a significant contribution and
        accomplish great things because I have an attitude of development and an
        optimistic outlook.
      </p>
      <div className="flex items-center justify-between gap-5 buttons-container">
        <a href="assets/Kotagiri-Yaswanth-Sai.pdf" target="_blank">
          <button
            type="button"
            className="h-16 px-3 rounded-lg lg:p-4 bg-primary text-[#023047] font-bold text-lg"
          >
            View Resume
          </button>
        </a>
        <a href="https://github.com/yaswanthsai002" target="_blank">
          <button
            type="button"
            className="flex items-center justify-between h-16 gap-3 px-3 rounded-lg lg:p-5 border-0 bg-[#24292e]"
          >
            <FaGithub className="text-4xl lg:text-2xl" /> View GitHub
          </button>
        </a>
      </div>
      <div className="flex items-center justify-between gap-2 lg:gap-5 connect-with-me-container">
        <p className="text-sm lg:text-xl">Connect with me:</p>
        <SocialIcons isAnimated={true} />
      </div>
    </div>
    <div
      data-aos="zoom-in-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="750"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      className="flex items-center justify-center w-full lg:w-1/2 profile-img-container"
    >
      <img
        src="images/profile-pic.webp"
        alt="Profile Picture"
        className="w-full p-4 border-8 rounded-full lg:w-2/3 border-primary"
      />
    </div>
  </section>
);

export default Home;