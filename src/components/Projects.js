import React from 'react';
import {useEffect} from 'react'
import { useState } from 'react';
import { projectsData } from './ProjectsData';
import { projectsNav } from './ProjectsData';
import ProjectItems from './ProjectItems';

export const Projects = () => {
    const [item, setItem] = useState({name: 'all' });
    const [projects, setProjects] = useState([]);
    const[active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };
    return (
        <section className="projects" id="projects">
            <h2 className='project-title'>Projects</h2>
            <span className='project-subtitle'>Check out my work in software development and website design.</span>
            <div className="project-filters">
            {projectsNav.map((item, index) => (
                <span
                    onClick={(e) => handleClick(e, index)}
                    className={`${active === index ? 'active-project' : ''} project-item`}
                    key={index}
                >
                    {item.name}
                </span>
            ))}
            </div>
            <div className='project-grids'>
                <div className="project-container grid">
                    {projects.map((item) => {
                        return <ProjectItems item={item} key={item.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}