import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Chattie",
      projectLink: "https://chattie-6xqm.onrender.com/login",
      projectDescription: "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. This uses MongoDB as its primary database for messages and users.",
      projectTech: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "Javascript",
        "Socket.io",
      ],
      projectExternalLinks: {
        github: "https://github.com/shivah12/Chattie",
        externalLink: "https://chattie-6xqm.onrender.com/login",
      },
    },
    {
      image: "/project2.png",
      projectName: "Nextbot",
      projectLink: "https://nextbot-five.vercel.app/",
      projectDescription: "This is a landing page developed to understand Spline model integration in NextJs project, the page layouts and design by using TailwindCSS, along with using Typescript.",
      projectTech: [
        "Next.js",
        "Typescript",
        "Spline",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/shivah12/nextbot",
        externalLink: "https://nextbot-five.vercel.app/",
      },
    },
    {
      image: "/project3.jpeg",
      projectName: "MyList",
      projectLink: "https://my-list-beta.vercel.app/",
      projectDescription: "This is a ToDoList application built using Next.js, integrated with Clerk for user authentication. It leverages TypeScript for type safety, Tailwind CSS for styling, and Prisma as the ORM for interacting with the database, MongoDB.",
      projectTech: [
        "Next.js",
        "Typescript",
        "Clerk auth",
        "MongoDB",
        "Prisma ORM",
      ],
      projectExternalLinks: {
        github: "https://github.com/shivah12/MyList",
        externalLink: "https://my-list-beta.vercel.app/",
      },
    },
  ];
  
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
