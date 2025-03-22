import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  const socialLinks = [
    {
      name: "github",
      url: "https://github.com/Omer-Mevlutoglu",
      class: "icon-github",
      ariaLabel: "GitHub profile",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/%C3%B6mer-mevl%C3%BCto%C4%9Flu-ab7105257/",
      class: "icon-linkedin",
      ariaLabel: "LinkedIn profile",
    },
  ];
  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          <span className="typing-text">Software Engineer, Web Developer.</span>
        </motion.h1>

        <p className="sub-title">
          Im a developer passionate about building modern web and mobile
          solutions for small and medium-sized businesses. Whether you need a
          dynamic website to showcase your services, win new work, or launch an
          online store, I can help. I specialize in technologies like React,
          Next.js, and the MERN stack for full-stack web development, along with
          cross-platform mobile app development using Flutter & Flutter Flow. I
          manage projects from start to finish, ensuring clear, regular
          communication every step of the way. Lets work together to bring your
          vision to life!
        </p>

        <div className="all-icons flex">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`icon ${link.class}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {/* Optional: Add screen reader-only text */}
              <span className="sr-only">{link.ariaLabel}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
