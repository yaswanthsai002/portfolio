import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-4 py-3 justify-evenly gap-y-8 min-h-44 bg-secondary">
      <div className="flex flex-col items-center justify-between w-full gap-y-8 md:flex-row">
        <div className="flex flex-col md:w-1/3">
          <h1 className="text-xl font-bold md:text-3xl md:text-center font-outfit text-primary">
            Kotagiri Yaswanth Sai
          </h1>
          <h3 className="text-sm font-semibold md:text-lg md:text-center font-urbanist text-primary">
            Full Stack Developer
          </h3>
        </div>
        <a href="#home" className="flex md:justify-center md:w-1/3">
          <img
            src="images/Programming-amico.png"
            alt="Programming"
            className="object-contain w-20 h-20"
          />
        </a>
        <div className="flex md:justify-center md:w-1/3">
          <SocialIcons isAnimated={false} />
        </div>
      </div>
      <p className="text-sm text-center md:w-1/3 text-primary">
        &copy; 2024 Kotagiri Yaswanth Sai. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
