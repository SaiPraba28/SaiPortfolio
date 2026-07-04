import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSitemap,
  FaCube,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMiro,
  SiVercel,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandAdobeXd, TbBrandVisualStudio } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

const categories = [
  
  {
    title: "Front-end Development",
    icon: "🌐",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe XD", icon: <TbBrandAdobeXd /> },
      { name: "Miro", icon: <SiMiro /> },
      { name: "Wireframing", icon: <GiWireframeGlobe /> },
      { name : "Prototyping", icon: <MdDesignServices /> },
      { name : "Design Principles", icon: <MdDesignServices /> },
    ],
  },
  {
    title: "Programming ",
    icon: "🗄️",
    skills: [
      { name: "Java", icon: <FaJava />  },
      { name: "OOP",  icon: <FaCube /> },
      { name: "Basic DSA", icon: <FaSitemap /> },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <TbBrandVisualStudio /> },
     
    ],
  },
  
  
];
  

const Skills = () => {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";
  const accentBg = isDark ? "bg-blue-900/30" : "bg-blue-100/50";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 md:py-24`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent [text-fill-color:transparent] mb-4 leading-snug overflow-visible pb-1 pt-4">
            My Skills
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl ${textPrimary} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise across different
            domains of software development
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-0 animate-fade-in`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>
              10+
            </div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Technologies
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>4</div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Categories
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>1+</div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Years Learning
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>∞</div>
            <div className={`text-sm font-medium ${textPrimary}`}>Passion</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`${cardBg} rounded-2xl border-2 p-8 transition-all duration-300 ${
                  hoveredCard === idx
                    ? isDark
                      ? "border-blue-600 shadow-lg shadow-blue-900/20"
                      : "border-blue-400 shadow-lg shadow-blue-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{category.icon}</div>

                  <h2 className={`text-2xl font-bold ${textSecondary}`}>
                     {category.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                     <div
                       key={skill.name}
                       className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default
                       ${
                          isDark
                            ? "bg-slate-900 border-slate-700 text-gray-200"
                            : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium">
                           {skill.name}
                        </span>
                      </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 opacity-0 animate-fade-in rounded-2xl p-8 md:p-12 ${
            isDark
              ? "bg-blue-950/50 border-2 border-blue-900/40"
              : "bg-blue-100/50 border-2 border-blue-200"
          }`}
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Continuous Learning
          </h2>
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Technology evolves rapidly, and so do I. I'm committed to learning modern technologies,enhancing my skills and building real-world projects that make an impact.
          </p>
          <div className="flex gap-4 flex-wrap">
            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              🎯 Currently Learning: Advanced React
            </div>
            
            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              💡 Exploring: UI Animations & Micro Interactions
            </div>

            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              🚀 Next Goal: Typescript & Next.js
            </div>

          </div>
        </div>
        <div
          className={`text-center mt-16 opacity-0 animate-fade-in`}
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/work">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View My Projects
              </button>
            </Link>

            <Link to="/connect">
              <button
                className={`${
                  isDark
                    ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                } px-8 py-4 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}
              >
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;