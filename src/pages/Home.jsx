import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaDatabase,
  FaPython,
  FaGraduationCap,
  FaShieldAlt,
  FaPalette,
  FaLaptopCode,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaPaintBrush,
  FaJava,
  FaEye, 
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [displayText, setDisplayText] = useState("Front-end Developer");
  
  const roles_text = ["Front-end Developer", "UI / UX Enthusiast" , "Java Developer"];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles_text.length;
      setDisplayText(roles_text[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const roles = [
    {
      icon: FaCode,
      title: "Front-end Developer",
      desc: "Building responsiveweb applications",
    },
    {
      icon: FaPalette,
      title: "UI / UX Enthusiast",
      desc: "Designing intuitive and user-friendly interfaces",
    },
    {
      icon: FaReact,
      title: "React Developer",
      desc: "Creating modern component-based applications",
    },
    {
      icon: FaJsSquare,
      title: "JavaScript Developer",
      desc: "Developing dynamic and interactive web experiences",
    },
    {
    icon: FaPaintBrush,
    title: "Responsive Web Designer",
    desc: "HTML,CSS,Tailwind CSS & Bootstrap",
    },
    {
    icon: FaJava,
    title: "Java Developer",
    desc: "Problem solving & programming fundamentals",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
               Sai Praba R
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
            >
              {displayText}
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
            >
              I'm a passionate{" "}
              <span className="font-semibold">Front-end Developer</span>{" "}
              who loves building,{" "}
              <span className="font-semibold">responsive web experiences</span>.I blend
              clean code with intuitive design to create user-friendly interfaces.Always exploring new technologies
              and crafting engaging digital experiences.{" "}
              
            </p>

            {/* Resume Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

                {/* View Resume */}

              <a
                   href="/SaiPrabaResume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-cyan-600 hover:scale-105 transition-all duration-300"
              >
                <FaEye className="text-lg" />
                   View Resume
              </a>

                 {/* Download Resume */}

              <a
                   href="/SaiPrabaResume.pdf"
                   download="SaiPrabaResume.pdf"
                   className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-400 text-blue-400 font-semibold hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <FaDownload className="text-lg" />
                   Download Resume
              </a>

            </div>
            <br></br>
            <br></br>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/work">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  View My Work
                </button>
              </Link>

              <Link to="/connect">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex justify-center items-center">
              <div
                className={`relative w-72 h-72 rounded-full p-1 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                    : "bg-gradient-to-r from-blue-400 to-cyan-400"
                } shadow-[0_0_35px_rgba(59,130,246,0.6)]`}
              >
                <img
                  src="./Sai.jpeg"
                  alt="SaiPraba R"
                  className="w-full h-full rounded-full object-cover border-4 border-[#0b1120]"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      isDark
                        ? "bg-blue-950 hover:bg-blue-900/80"
                        : "bg-blue-100 hover:bg-blue-200"
                    }`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${textSecondary}`} />
                    <div>
                      <h4
                        className={`font-bold text-base sm:text-lg ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {role.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base ${textPrimary} leading-snug`}
                      >
                        {role.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;