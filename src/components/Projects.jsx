import React, { useState } from "react";
import img1 from "../assets/images/ai.png";
import img5 from "../assets/images/ai2.png";
import img2 from "../assets/images/dom.png";
import img3 from "../assets/images/tols.png";
import img4 from "../assets/images/solar.png";
import img6 from "../assets/images/pc.png";
import img7 from "../assets/images/law.png";
import img8 from "../assets/images/bistro.png";
import img9 from "../assets/images/shop.png";
import img10 from "../assets/images/domapp.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      id: 10,
      title: "Electro",
      description: " Design & Development & Responsive & React",
      link: "https://dom-hsro.onrender.com/",
      img: img10,
    },
    {
      id: 8,
      title: "Bistro Bliss",
      description: " Food & Design & Development & Responsive & React",
      link: "https://bistro-bliss-wine.vercel.app/",
      img: img8,
    },
    {
      id: 1,
      title: "AI Chat",
      description: "AI chat for engineers",
      link: 'https://sbc-gamma.vercel.app/',
      img: img1,
    },
    {
      id: 2,
      title: "Business & Engineering Company",
      link: 'https://dome-app-2inp.vercel.app/',
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "Business Startup",
      link: "https://dometools-fv24.onrender.com/",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 4,
      title: "Solar System",
      link: "https://solar-system-jade.vercel.app/",
      description: "Design & Development",
      img: img4,
    },
    {
      id: 5,
      title: "Business AI Chat",
      description: "Design & Development",
      link: "https://sbc-v2.vercel.app/login",
      img: img5,
    },
    {
      id: 6,
      title: "Fun PC",
      description: "Design & Development & Fun",
      link: "https://abdulrahmanm0.github.io/MY__PC/",
      img: img6,
    },
    {
      id: 7,
      title: "Law Firm",
      description: "Design & Development & Responsive & React",
      link: "https://law-firm-rust-xi.vercel.app/",
      img: img7,
    },
    {
      id: 9,
      title: "Shop",
      description: " Shop & Design & Development & Responsive & React",
      link: "https://shopwise-vert.vercel.app/",
      img: img9,
    },

  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {projects.map((item, i) => <ProjectCard key={i} item={item} />)
            }
        </div>
      </div>
    </>
  );
}

export default Projects;
