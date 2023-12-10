import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

const ProjectItems = ({item}) => {
    return (
        <div className = "project-card" key = {item.id}>
            <img src={item.image} alt='' className='project-img' />
            <h3 className = "project-title">{item.title}</h3>
            <p className = "project-description">{item.description}</p>
            <div className="project-tags">
                {item.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                ))}
            </div>
            <a href={item.link} className = "project_button">
                <button onClick={() => console.log('Code')}>View Project <ArrowRight size={16} /></button>
            </a>
        </div>
    );
};

export default ProjectItems