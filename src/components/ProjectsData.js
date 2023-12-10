import Project1 from '../img/train-scheduler.png';
import Project10 from '../img/personal-website.png';
import Project11 from '../img/personal-website-old.png';
import Project20 from '../img/Least-cost-map.png';
import Project21 from '../img/terrain-analysis.png';

export const projectsData = [
    /*Image size needs to be 16:9*/
    {
        id: 1,
        image: Project1,
        title: 'Train Scheduler',
        category: 'Technical',
        description: 'Uses multi thread scheduling to construct a simulator of an automated control system for a railway track.',
        tags: ['C'],
        link: 'https://github.com/lauren2chow/Train-Scheduler',
    },
    {
        id: 10,
        image: Project10,
        title: 'Personal Website',
        category: 'Web Design',
        description: 'I created and designed the website you are currently viewing to display my portfolio and apply my web development skills.',
        tags: ['ReactJS'],
        link: 'https://github.com/lauren2chow/lauren2chow.github.io',
    },
    {
        id: 11,
        image: Project11,
        title: 'Personal Website (Old)',
        category: 'Web Design',
        description: 'My old computer science personal website I created and designed that displayed my portfolio at the time.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/lauren2chow/lauren2chow.github.io',
    },

]

export const projectsNav = [
    {
        name: 'all',  
    },
    {
        name: 'Technical',  
    },
    {
        name: 'Web Design',  
    },

]

export const portfolioData = [
    {
        id: 20,
        image: Project20,
        title: 'Least Cost Path',
        description: 'This is the least cost path of the gray whale\'s migration along the coast of British Columbia, created through the analysis of rasterization, reclassification, cost surface, and cost path methods. Utilizing vessel data, the map reveals the optimal route, emphasizing potential collision risks.',
        tags: ['QGIS'],
        source: ['UVIC Labs', 'Vessel Traffic 2010@https://bcmca.ca/data/hu_shippingtrans_researchvesseltraffic/'],
    },
    {
        id: 21,
        image: Project21,
        title: 'Terrain Analysis and Regression',
        description: 'The map illustrates prediction errors of landscape productivity (fPAR) in the Southern Interior Mountains. Employing graduated symbology, it vividly depicts spatial patterns of over and under predictions, offering insights into the accuracy and geographic variations of the regression model.',
        tags: ['QGIS', 'R'],
        source: ['UVIC Labs'],
    },
]