import React from 'react';

const ExtendedProjects = () => {
    const projects = [
        {
            id: 1,
            thumbnail: 'project1.jpg',
            description: 'Project 1 description',
            skills: ['React', 'JavaScript', 'CSS'],
        },
        {
            id: 2,
            thumbnail: 'project2.jpg',
            description: 'Project 2 description',
            skills: ['React', 'Node.js', 'MongoDB'],
        },
        // Add more projects here...
    ];

    return (
        <div className="gallery">
            {projects.map((project) => (
                <div key={project.id} className="project">
                    <img src={project.thumbnail} alt="Project Thumbnail" />
                    <p className="font-bold text-sm md:text-sm  md:w-1/4">{project.description}</p>
                    <ul className="font-light text-sm md:text-sm md:w-3/4 mt-1 md:mt-0">
                        {project.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExtendedProjects;
