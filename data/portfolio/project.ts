import { Projects } from '../../src/models/interfaces/Portfolio/Projects';
import PortfolioProject from '../../src/assets/images/Portfolio_Project.png';

export const project: Projects = {
  projects: [
    {
      id: '1',
      title: 'Full web page of a portfolio',
      subtitle: 'Portfolio project',
      date: 2023,
      imageLink: PortfolioProject,
      description: [
        {
          id: '1',
          bulletPoint:
            "Building a stylish personal portfolio website with React, showcasing your experience, education, projects... The project implements interactive features and ensures it's responsive. Deployment is done via GitHub Pages for free.",
        },
      ],
      links: [
        {
          id: '1',
          name: 'GitHub',
          link: 'https://github.com/Mariovido/portfolio-frontend',
        },
      ],
      projectLink: 'https://mariovido.github.io/portfolio-frontend/',
      tags: [
        {
          id: '1',
          tag: 'NestJS',
        },
        {
          id: '2',
          tag: 'TypeScript',
        },
        {
          id: '3',
          tag: 'CI/CD',
        },
        {
          id: '4',
          tag: 'Docker',
        },
        {
          id: '5',
          tag: 'PostgreSQL',
        },
      ],
    },
  ],
};
