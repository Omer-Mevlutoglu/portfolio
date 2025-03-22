import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex" id="projects">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & Next
        </button>
        <button
          onClick={() => {
            handleClick("mern");
          }}
          className={currentActive === "mern" ? "active" : null}
        >
          Mern Stack
        </button>
        <button
          onClick={() => {
            handleClick("java");
          }}
          className={currentActive === "java" ? "active" : null}
        >
          Java
        </button>

        <button
          onClick={() => {
            handleClick("flutter");
          }}
          className={currentActive === "flutter" ? "active" : null}
        >
          Flutter
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <img width={266} src={item.imgPath} alt={item.projectTitle} />

              <div className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon icon-github"
                        aria-label="GitHub repository"
                      />
                    )}
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon icon-link"
                        aria-label="Live demo"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
