import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaGraduationCap,
  FaYoutube,
  FaArrowRight,
  FaPalette,
  FaRocket,
  FaCertificate,
  FaUniversity,
  FaCalendarAlt,
  FaExpand,
  FaTimes,
} from "react-icons/fa";


import javaCertificate from "../assets/certificates/JAVA.jpeg";
import uiuxCertificate from "../assets/certificates/UIUX.jpeg";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Foundation",
      description:
        "Building a strong foundation in Computer Science with a focus on Front-end Development, UI/UX Design, Java fundamentals, and problem-solving while continuously improving practical development skills..",
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Front-end Development",
      description:
        "Developed responsive and interactive web applications using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React, with a focus on clean code and user-friendly experiences.",
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "UI/UX Design Journey",
      description:
        "Designed modern and intuitive user interfaces using Figma while applying design principles, wireframing, prototyping, and user-centered design practices.",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Continuous Learning",
      description:
        "Continuously exploring modern web technologies, improving development and design skills, and building real-world projects to grow as a developer",

    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS","JavaScript", "React", "Tailwind", "Bootstrap"],
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Adobe XD", "Miro", "Wireframing", "Prototyping", "Design Principles"],
    },
    {
      category: "Java & Programming",
      items: ["OOP", "Data Structures", "Algorithms"],
    },
    {
      category: "Tools & Platforms",
      items: ["Visual Studio Code", "GitHub"],
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
  {
    title: "Java Programming",
    description:
      "Successfully completed a Java Programming certification covering Core Java, Object-Oriented Programming, Exception Handling, Collections, and programming fundamentals.",
    image: javaCertificate,
  },
  {
    title: "UI/UX Design",
    description:
      "Completed a UI/UX Design certification focusing on Figma, Adobe XD, Wireframing, Prototyping, User-Centered Design, and Design Principles.",
    image: uiuxCertificate,
  },
  ];


  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            A passionate Front-end Developer and UI/UX Designer dedicated to creating modern, responsive, and user-centered digital experiences.
          </p>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Welcome to My Journey
          </h2>
          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I'm{" "}
            <span className="font-semibold text-blue-500">
              Sai Praba R  
            </span>
             ,  a B.E Computer Science Engineering student with a strong passion
            for Front-end Development and UI/UX Design. I enjoy transforming ideas
            into responsive, interactive, and visually appealing web applications that 
            deliver seamless user experiences.

          </p>
          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            My journey began with learning the fundamentals of web development and programming, 
            gradually expanding into modern technologies such as HTML, CSS, Tailwind CSS, Bootstrap,
             JavaScript, React, and UI/UX design principles. Every project I build helps me strengthen 
             both my technical skills and my eye for design.As someone who believes in continuous learning, 
             I actively explore new technologies, improve my problem-solving abilities, and stay updated with 
             current design and development trends. I enjoy collaborating with others and turning creative ideas
              into practical solutions.I am currently open to full-time opportunities where I can 
              contribute my skills, learn from experienced professionals, and grow as a Front-end Developer and UI/UX Designer 
              while building impactful digital products.
          </p>
        </div>
        {/* ================= EDUCATION ================= */}

<section className="mt-24">

  <div className="flex items-center gap-3 mb-8">

    <FaGraduationCap className="text-cyan-400 text-4xl" />

    <div>
      <h2 className="text-4xl font-bold text-white">
        Education
      </h2>

      <p className="text-gray-400">
        My academic journey.
      </p>

    </div>

  </div>

  <div className="bg-[#111827] border border-cyan-500/30 rounded-3xl p-8">

    <h3 className="text-3xl font-semibold text-cyan-400">
      Bachelor of Engineering(B.E)
    </h3>

    <p className="flex items-center gap-3 mt-5 text-gray-300">
      <FaUniversity />
      Computer Science and Engineering
    </p>

    <p className="flex items-center gap-3 mt-3 text-gray-300">
      <FaCalendarAlt />
      2022 - 2026
    </p>

    <p className="mt-3 text-gray-300">
      <strong>College:</strong> Velammal Institute of Technology and Science, Chennai
    </p>

    <p className="mt-3 text-gray-300">
      <strong>CGPA:</strong> 8.54
    </p>

    <p className="mt-6 text-gray-400 leading-8">
     Successfully completed all coursework for my Bachelor's degree in Computer Science and Engineering and am currently awaiting graduation. Throughout my academic journey, I built a strong foundation in Front-end Development, UI/UX Design, and Java through coursework, academic projects, and continuous learning.
    </p>

  </div>

</section>

{/* ================= CERTIFICATIONS ================= */}

<section className="mt-24">

  <div className="mb-12">

    <h2 className="text-4xl font-bold text-white flex items-center gap-3">

      <FaCertificate className="text-cyan-400" />

      Certifications

    </h2>

    <p className="text-gray-400 mt-2">
      Professional certifications that strengthened my technical knowledge and design expertise.
    </p>

  </div>

  <div className="space-y-10">

    {certificates.map((certificate, index) => (

      <div
        key={index}
        className="bg-[#111827] border border-cyan-500/30 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
      >

        {/* Preview */}

        <div className="relative group overflow-hidden">

          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Hover */}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

            <button
              onClick={() => setSelectedCertificate(certificate.image)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
            >
              <FaExpand />
              View Certificate
            </button>

          </div>

        </div>

        {/* Content */}

        <div className="p-8">

          <h3 className="text-3xl font-semibold text-cyan-400">
            {certificate.title}
          </h3>

          <p className="text-gray-400 mt-4 leading-8">
            {certificate.description}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

{/* ================= CERTIFICATE MODAL ================= */}

{selectedCertificate && (

<div
  className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] p-6"
  onClick={() => setSelectedCertificate(null)}
>

  <div
    className="relative bg-[#111827] rounded-2xl p-3 max-w-5xl w-full"
    onClick={(e) => e.stopPropagation()}
  >

    {/* Close Button */}

    <button
      onClick={() => setSelectedCertificate(null)}
      className="absolute top-3 right-3 bg-gray-900 hover:bg-red-500 transition p-3 rounded-full text-white z-50"
    >
      <FaTimes size={20} />
    </button>

    {/* Certificate */}

    <img
      src={selectedCertificate}
      alt="Certificate"
      className="w-full max-h-[85vh] object-contain rounded-xl"
    />

  </div>

</div>

)}

  <br></br> 
  <br></br>  
  <br></br>   

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Core {" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Strenghts
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
               💻 
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Responsive Web Development
                </h3>
                <p className={textPrimary}>
                  Develop responsive, interactive, and user-friendly web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap, ensuring seamless performance across devices.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                🎨
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  User-Centered UI/UX Design
                </h3>
                <p className={textPrimary}>
                  Design intuitive interfaces through wireframing, prototyping, and visual design using Figma, Adobe XD, and Miro while applying user-centered design principles
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                ⚡ 
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Clean & Maintainable Code
                </h3>
                <p className={textPrimary}>
                  Write clean, reusable, and well-structured code by following modern development practices, making applications scalable and easier to maintain.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                🌱 
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                   Continuous Learning & Growth
                </h3>
                <p className={textPrimary}>
                  Continuously explore new technologies, enhance technical skills through hands-on projects, and stay updated with the latest trends in front-end development and UI/UX design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;