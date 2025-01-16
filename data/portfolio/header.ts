import { IconEnum } from '../../src/models/enums/IconEnum';
import { Header } from '../../src/models/interfaces/Portfolio/Header';

export const header: Header = {
  name: 'Mario Vidal Domínguez',
  role: 'Software Engineer @ Datadog',
  secondaryRole: 'Associate Professor @ ICAI',
  description:
    'Experienced Software Engineer with a passion for Clean Code and teamwork',
  navBar: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Education',
      href: '#education',
    },
    {
      name: 'Project',
      href: '#project',
    },
    {
      name: 'Skill',
      href: '#skill',
    },
  ],
  iconList: [
    {
      id: '8323de20-0c60-5f18-8164-d0fbdfcbc8ad',
      name: IconEnum.GITHUB,
      link: 'https://github.com/Mariovido',
      target: '_blank',
    },
    {
      id: '5005fcea-d2c1-5daf-9b5e-76309af8fa50',
      name: IconEnum.LINKEDIN,
      link: 'https://www.linkedin.com/in/mariovidaldominguez/',
      target: '_blank',
    },
  ],
};
