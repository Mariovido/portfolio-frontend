import { IconEnum } from '../../src/models/enums/IconEnum';
import { Header } from '../../src/models/interfaces/Portfolio/Header';

export const header: Header = {
  name: 'Mario Vidal Domínguez',
  role: 'Software Engineer at eDreams ODIGEO',
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
      name: 'Skill',
      href: '#skill',
    },
  ],
  iconList: [
    {
      id: '1',
      name: IconEnum.GITHUB,
      link: 'https://github.com/Mariovido',
      target: '_blank',
    },
    {
      id: '2',
      name: IconEnum.LINKEDIN,
      link: 'https://www.linkedin.com/in/mariovidaldominguez/',
      target: '_blank',
    },
  ],
};
