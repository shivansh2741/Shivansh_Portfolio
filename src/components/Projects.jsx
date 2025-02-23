import React from "react";
import Tourism from "../assets/Tourism-Management-System.jpg";
import Hostellaro from "../assets/Hostellaro.png";
import Footer from "./Footer";

const ProjectCard = ({ title, description, git, technologies }) => {
    return (
        <div className="h-auto sm:max-h-[500px] md:max-h-[625px] w-[450px] lg:max-h-[625px] sm:w-[500px] md:max-w-[400px] lg:max-w-[500px] bg-gray-900 border border-neutral-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4 sm:p-0">
            {title === "Trektopia" && (
                <img
                    className="w-full rounded-t-lg object-cover h-55 sm:h-60 md:h-72"
                    src={Tourism}
                    alt="Trektopia"
                />
            )}
            {title === "Hostellaro" && (
                <img
                    className="w-full rounded-t-lg object-cover h-55 sm:h-60 md:h-72"
                    src={Hostellaro}
                    alt="Hostellaro"
                />

            )}
            <div className="p-4">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400 mt-2">
                    {description}
                </p>
            </div>

            <div className="flex flex-col items-center mt-4">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-4">
                    <p className="text-sm sm:text-base font-semibold text-white">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tag, index) => (
                            <p key={`${index}-${tag}`} className="text-xs sm:text-sm md:text-md text-blue-500">
                                #{tag}
                            </p>
                        ))}
                    </div>
                </div>

                <a
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-md md:text-lg font-semibold text-white bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:text-green-400 transition duration-300 mb-2"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-12 justify-center items-center p-4 mt-16">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: "Hostellaro",
        description:
            "A full-stack hostel management system designed for students, wardens, and admins, featuring automated room allocation, issue tracking, and real-time communication.",
        git: "https://github.com/shivansh2741/Dorm_Management",
        technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
        title: "Trektopia",
        description:
            "A backend system for managing tour packages, implementing role-based access control, secure user management, and an optimized booking experience.",
        git: "https://github.com/shivansh2741/TrekTopia",
        technologies: ["HTML", "CSS", "EJS", "NodeJS", "ExpressJS", "MySQL"],
    },
];

export default Projects;
