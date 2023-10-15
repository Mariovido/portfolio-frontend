import { Experiences } from '../../src/models/interfaces/Portfolio/Experiences';

export const experience: Experiences = {
  experiences: [
    {
      id: '1',
      role: 'Back-end developer',
      company: 'Minsait',
      date: 'Jan 2023 - Ongoing',
      description: [
        {
          id: '1',
          description: 'Developing microservices using Java Spring Boot',
        },
        {
          id: '2',
          description:
            'Developing and maintaining software using Java Spring Boot and PostgreSQL',
        },
        {
          id: '3',
          description:
            "Designing and coding database tables to store the application's data",
        },
        {
          id: '4',
          description:
            'Backend development, deployment, and scalability using Docker, K8s and AWS',
        },
        {
          id: '5',
          description:
            'Designing and developing integration tests using Java Spock Framework',
        },
        {
          id: '6',
          description: 'Tracking issues and version control using Git',
        },
      ],
      links: [
        {
          id: '1',
          name: 'Enagás GTS',
          link: 'https://www.gdogas.es/en/public-portal/home',
        },
      ],
      companyLink: 'https://www.minsait.com',
      tags: [
        {
          id: '1',
          name: 'Java Spring Boot',
        },
        {
          id: '2',
          name: 'AWS',
        },
        {
          id: '3',
          name: 'CI/CD',
        },
        {
          id: '4',
          name: 'Docker',
        },
        {
          id: '5',
          name: 'Java',
        },
      ],
    },
    {
      id: '2',
      role: 'Consultant',
      company: 'KPMG',
      date: 'Mar 2022 - Dec 2022',
      description: [
        {
          id: '1',
          description:
            'Perform low-code development with Microsoft’s Power Platform-tools (Power Apps, Power Automate, Power BI, and Power Virtual Agent)',
        },
        {
          id: '2',
          description:
            'Customization of applications through the use of scripts, Azure Functions and/or Plugins',
        },
        {
          id: '3',
          description: 'Microsoft PCF development with React',
        },
        {
          id: '4',
          description:
            'Configure the different technological solutions of Microsoft Dynamics ERP and CRM',
        },
        {
          id: '5',
          description:
            'Develop functional documents of the proposed solutions and training documents for end-users',
        },
      ],
      links: undefined,
      companyLink: 'https://www.kpmg.com',
      tags: [
        {
          id: '1',
          name: 'React',
        },
        {
          id: '2',
          name: 'TypeScript',
        },
        {
          id: '3',
          name: 'Microsoft Azure',
        },
        {
          id: '4',
          name: 'JavaScript',
        },
        {
          id: '5',
          name: 'C#',
        },
      ],
    },
    {
      id: '3',
      role: 'Software engineering intern',
      company: 'AINIA',
      date: 'Feb 2021 - Jun 2021',
      description: [
        {
          id: '1',
          description: 'Software development using Java Spring Boot',
        },
        {
          id: '2',
          description: 'Preparation of technical and research documentation',
        },
        {
          id: '3',
          description: 'Development and maintenance of web services',
        },
        {
          id: '4',
          description: 'Development of R+D+I activities',
        },
      ],
      links: undefined,
      companyLink: 'https://www.ainia.es',
      tags: [
        {
          id: '1',
          name: 'Java Spring Boot',
        },
        {
          id: '2',
          name: 'CI/CD',
        },
        {
          id: '3',
          name: 'Java',
        },
      ],
    },
  ],
};
