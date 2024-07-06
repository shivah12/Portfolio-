import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "AppWeave",
      role: "Full Stack Developer Intern",
      url: "https://appweave.tech/",
      start: "July 2024",
      end: "Present",
      shortDescription: [
        "I have experience working with the development of the main website using Gatsby and TypeScript.",
       
        "I've also worked with a set of team to create user-friendly website designs for clients using Figma.",
        
      ],
    },
    {
      name: "EaseMyHood",
      role: "UI/UX Designer",
      url: "/",
      start: "July 2024",
      end: "Present",
      shortDescription: [
        "Designing the MVP web design for a quick commerce startup, creating a visually appealing and user-friendly interface.",
        "Incorporated design tools like Figma to create and refine the design, ensuring a cohesive and scalable solution.",
        
      ],
    },
    {
      name: "Digital Dose",
      role: "UI/UX Designer Intern",
      url: "https://digitaldose.in/",
      start: "May 2024",
      end: "July 2024",
      shortDescription: [
        " Designed and prototyped multiple screens for the company's CRM system using Figma, enhancing user experience and interface.",
        "Contributed to the development of the Client Portal App by creating user-friendly and intuitive screen designs, improving engagement and satisfaction.",
        
      ],
    },
    {
      name: "GeeksForGeeks",
      role: "Campus Ambassador",
      url: "https://www.geeksforgeeks.org/colleges/veer-surendra-sai-university-of-technology-vssut-sambalpur/",
      start: "May 2024",
      end: "Present",
      shortDescription: [
        "Representing GeeksforGeeks as the official campus ambassador for Veer Surendra Sai University of Technology, Burla",
        "Promoting GeeksforGeeks' resources, contests, and events among students and faculty, increasing brand visibility and engagement",
        
      ],
    },
    {
      name: "VSSUT Robotics",
      role: "Technical Team Member",
      url: "https://www.linkedin.com/company/vssutrobotics/mycompany/",
      start: "April 2023",
      end: "Present",
      shortDescription: [
        " Developed an orientation form for new inductee registration using React and Firestore Real-time Database handling the data of 400+ students.",
        " Mentored and taught basic to intermediate Python programming to close to 50 students through various workshops and bootcamps."
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
