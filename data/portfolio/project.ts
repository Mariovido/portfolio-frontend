import { Projects } from '../../src/models/interfaces/Portfolio/Projects';
import PortfolioProject from '../../src/assets/images/Portfolio_Project.png';
import ProblemsWebpage from '../../src/assets/images/Problems_Webpage.png';

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
    {
      id: 'c592466b-5897-5cf0-841a-b16c9ccda43b',
      title: 'Webpage with problems solved',
      subtitle: 'Problems webpage',
      date: 2024,
      imageLink: ProblemsWebpage,
      description: [
        {
          id: '492feb6f-f83a-5040-bc00-0f9d19d7a589',
          bulletPoint:
            'Crafted a LeetCode-style problem repository with concise solutions to diverse algorithmic challenges.',
        },
      ],
      links: [
        {
          id: '9c4e786c-b48b-5ff3-8895-42a5d9ba4deb',
          name: 'GitHub',
          link: 'https://github.com/Mariovido/portfolio-frontend',
        },
      ],
      projectLink: 'https://mariovido.github.io/portfolio-frontend/problems',
      tags: [
        {
          id: '338bb907-669f-57e8-9dcc-94337acd0900',
          tag: 'Data Structures',
        },
        {
          id: 'c8490284-556e-5d42-802c-182675b2ceec',
          tag: 'Algorithms',
        },
        {
          id: 'b601a0dc-6fb8-5cdd-a844-fdce6462a6c8',
          tag: 'React',
        },
        {
          id: '29b56ec4-1cf2-5b77-b055-24606873e60b',
          tag: 'TypeScript',
        },
        {
          id: '8b99d050-fb84-5cd5-8c2b-c3897c4f8925',
          tag: 'Problem Solving',
        },
      ],
    },
  ],
};
