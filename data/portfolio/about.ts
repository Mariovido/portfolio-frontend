export interface About {
  paragraphs: {
    description: string;
    links?: {
      tag: string;
      name: string;
      url: string;
    }[];
  }[];
}

// TODO - COMPLETE ABOUT WITH LINKS
export const about: About = {
  paragraphs: [
    {
      description:
        "👋 Hi, I'm a web developer with an education that includes a Degree in Telecommunications Engineering and a Master's in Software Engineering. My skills encompass Java, Python, TypeScript, JavaScript, HTML5, CSS3, and Go.",
    },
    {
      description:
        "🛠️ I'm proficient in Spring Boot, Node.js, NestJS, React, Angular, and Django. I handle both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases, and I'm well-versed in AWS, Azure, Docker, Kubernetes, Git, and GitHub Actions.",
    },
    {
      description:
        '🚀 My passion lies in crafting clean, efficient code and collaborating in dynamic environments.',
    },
  ],
};
