import { Experiences } from '../../src/models/interfaces/Portfolio/Experiences';

export const experience: Experiences = {
  experiences: [
    {
      id: '1',
      role: 'Software Engineer',
      company: 'eDreams ODIGEO',
      date: 'Oct 2023 - Ongoing',
      description: [
        {
          id: '1',
          bulletPoint:
            'Developing and maintaining Java-based JAX-RS microservices for the backend of the application',
        },
        {
          id: '2',
          bulletPoint:
            'Designing and maintaining tables in Oracle DB NoSQL for Big Data information',
        },
        {
          id: '3',
          bulletPoint:
            'Using monitoring tools such as Datadog to ensure platform performance',
        },
        {
          id: '4',
          bulletPoint:
            'Using messaging platforms like Apache Kafka to share information between different sources and users',
        },
        {
          id: '5',
          bulletPoint:
            'Testing applications by creating Unit Tests with JUnit and Mockito, and conducting A/B Testing',
        },
        {
          id: '6',
          bulletPoint:
            'Being in charge of the full development cycle end-to-end with tools like Docker, GCP, Jenkins, Jira, and Git',
        },
      ],
      links: undefined,
      companyLink: 'https://www.edreamsodigeo.com',
      tags: [
        {
          id: '1',
          tag: 'Java',
        },
        {
          id: '2',
          tag: 'GCP',
        },
        {
          id: '3',
          tag: 'Datadog',
        },
        {
          id: '4',
          tag: 'Docker',
        },
        {
          id: '5',
          tag: 'Apache Kafka',
        },
      ],
    },
    {
      id: '2',
      role: 'Back-End Developer',
      company: 'Minsait',
      date: 'Jan 2023 - Oct 2023',
      description: [
        {
          id: '1',
          bulletPoint: 'Developing microservices using Java Spring Boot',
        },
        {
          id: '2',
          bulletPoint:
            'Developing and maintaining software using Java Spring Boot and PostgreSQL',
        },
        {
          id: '3',
          bulletPoint:
            "Designing and coding database tables to store the application's data",
        },
        {
          id: '4',
          bulletPoint:
            'Backend development, deployment, and scalability using Docker, K8s and AWS',
        },
        {
          id: '5',
          bulletPoint:
            'Designing and developing integration tests using Java Spock Framework',
        },
        {
          id: '6',
          bulletPoint: 'Tracking issues and version control using Git',
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
          tag: 'Java Spring Boot',
        },
        {
          id: '2',
          tag: 'AWS',
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
          tag: 'Java',
        },
      ],
    },
    {
      id: '3',
      role: 'Consultant',
      company: 'KPMG',
      date: 'Mar 2022 - Dec 2022',
      description: [
        {
          id: '1',
          bulletPoint:
            'Perform low-code development with Microsoft’s Power Platform-tools (Power Apps, Power Automate, Power BI, and Power Virtual Agent)',
        },
        {
          id: '2',
          bulletPoint:
            'Customization of applications through the use of scripts, Azure Functions and/or Plugins',
        },
        {
          id: '3',
          bulletPoint: 'Microsoft PCF development with React',
        },
        {
          id: '4',
          bulletPoint:
            'Configure the different technological solutions of Microsoft Dynamics ERP and CRM',
        },
        {
          id: '5',
          bulletPoint:
            'Develop functional documents of the proposed solutions and training documents for end-users',
        },
      ],
      links: undefined,
      companyLink: 'https://www.kpmg.com',
      tags: [
        {
          id: '1',
          tag: 'React',
        },
        {
          id: '2',
          tag: 'TypeScript',
        },
        {
          id: '3',
          tag: 'Microsoft Azure',
        },
        {
          id: '4',
          tag: 'JavaScript',
        },
        {
          id: '5',
          tag: 'C#',
        },
      ],
    },
    {
      id: '4',
      role: 'Software Engineer Intern',
      company: 'AINIA',
      date: 'Feb 2021 - Jun 2021',
      description: [
        {
          id: '1',
          bulletPoint: 'Software development using Java Spring Boot',
        },
        {
          id: '2',
          bulletPoint: 'Preparation of technical and research documentation',
        },
        {
          id: '3',
          bulletPoint: 'Development and maintenance of web services',
        },
        {
          id: '4',
          bulletPoint: 'Development of R+D+I activities',
        },
      ],
      links: undefined,
      companyLink: 'https://www.ainia.es',
      tags: [
        {
          id: '1',
          tag: 'Java Spring Boot',
        },
        {
          id: '2',
          tag: 'CI/CD',
        },
        {
          id: '3',
          tag: 'Java',
        },
      ],
    },
  ],
};
