import { Projects } from '../../src/models/interfaces/Portfolio/Projects';
import PortfolioProject from '../../src/assets/images/Portfolio_Project.png';

export const project: Projects = {
  projects: [
    {
      id: '48f36217-6532-5416-98a1-51cd237ae8d1',
      title: 'Full web page of a portfolio',
      subtitle: 'Portfolio project',
      date: 2023,
      imageLink: PortfolioProject,
      description: [
        {
          id: '26156eea-e50e-506a-b8f2-916575a4fcb7',
          bulletPoint:
            "Building a stylish personal portfolio website with React, showcasing your experience, education, projects... The project implements interactive features and ensures it's responsive. Deployment is done via GitHub Pages for free.",
        },
      ],
      links: [
        {
          id: '9c4e786c-b48b-5ff3-8895-42a5d9ba4deb',
          name: 'GitHub',
          link: 'https://github.com/Mariovido/portfolio-frontend',
        },
      ],
      projectLink: 'https://mariovido.github.io/portfolio-frontend/',
      tags: [
        {
          id: '9ed2263c-7026-5ab5-8d0a-dd61fdae75d9',
          tag: 'NestJS',
        },
        {
          id: '545af743-9d3e-5ec9-8938-6e4218154465',
          tag: 'TypeScript',
        },
        {
          id: 'c0533ebd-0d47-55fa-a6f6-d2826794b6ae',
          tag: 'CI/CD',
        },
        {
          id: 'bd244969-ec19-5882-b631-ce0fd8c90bee',
          tag: 'Docker',
        },
        {
          id: '4a02eb73-5222-5923-9412-96da9a986371',
          tag: 'PostgreSQL',
        },
      ],
    },
  ],
};
