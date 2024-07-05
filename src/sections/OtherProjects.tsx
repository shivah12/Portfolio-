import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function OtherProjects() {
  const projectsData = [
    {
      image: "/project4.png",
      projectName: "Tattoo Studio",
      projectLink: "https://www.behance.net/gallery/202418915/Tattoo-Studio-Website-UIUX-Design-Web-Design",
      projectDescription:
        "Designed a visually stunning website for a tattoo studio, creating a bold and edgy online presence that showcases their artistic style and services, using Figma to craft a unique and engaging user experience.",
      projectTech: [
        "Figma",
      ],
      projectExternalLinks: {
        externalLink: "https://www.behance.net/gallery/202418915/Tattoo-Studio-Website-UIUX-Design-Web-Design",
      },
    },
    {
      image: "/project5.jpg",
      projectName: "Photography Website",
      projectLink: "https://www.behance.net/gallery/202312687/Photography-Website-UIUX-Design-Landing-Page",
      projectDescription:
        "Crafted a beautiful and minimalist website for a photography business, leveraging Figma to create a portfolio-focused design that showcases stunning images and tells a story, with a responsive layout that ensures a captivating visual experience across various devices.",
      projectTech: [
        "Figma",
      ],
      projectExternalLinks: {
        externalLink: "https://www.behance.net/gallery/202312687/Photography-Website-UIUX-Design-Landing-Page",
      },
    },
    {
      image: "/project6.png",
      projectName: "Anime Watching website",
      projectLink: "https://www.behance.net/gallery/202555243/Anime-Watching-Website-UIUX-Design-Web-Design",
      projectDescription:
        "Developed a user-friendly and immersive website for an anime watching platform, utilizing Figma to design an intuitive interface that allows users to easily discover and stream their favorite shows, with a clean and modern aesthetic that appeals to anime enthusiasts.",
      projectTech: [
       "Figma",
      ],
      projectExternalLinks: {
        externalLink: "https://www.behance.net/gallery/202555243/Anime-Watching-Website-UIUX-Design-Web-Design",
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
        <h2>Things I’ve Designed</h2>
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

export default OtherProjects;
