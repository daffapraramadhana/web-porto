"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ProjectCard from "./components/ProjectCard";

import Typewriter from "typewriter-effect";
import MenuSelection from "./components/MenuSelection";
import Footer from "./components/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const menuOptions = [
    "Go to Personal Page",
    "My Projects",
    "Contact Me",
    "Exit",
  ];

  const handleSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
    if (selectedOption === "Go to Personal Page") {
      window.location.href = "/personal"; // Redirect to the personal page
    } else if (selectedOption === "My Projects") {
      window.location.href = "/projects"; // Redirect to the projects page
    } else if (selectedOption === "Contact Me") {
      window.location.href = "/contact"; // Redirect to the contact page
    } else if (selectedOption === "Exit") {
      window.close(); // Close the browser window or perform another action
    }
  };

  return (
    <div className="main-div">
      <div className="main-title">
        <h1>
          {/* <Typewriter
            options={{
              strings: ["Hi.."],
              autoStart: true,
              loop: false,
              delay: 150,
              
            }}
          /> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //   console.log("All strings were deleted");
                // })
                .start();
            }}
          />
        </h1>
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("My Name Daffa Praramadhana")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //   console.log("All strings were deleted");
                // })
                .start();
            }}
          />
        </>
      </div>
      <MenuSelection options={menuOptions} onSelect={handleSelect} />
      {/* <ProjectCard
        title="My First Project"
        description="A cool project I built."
        link="https://example.com"
      /> */}
    </div>
  );
}
