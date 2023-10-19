import { IconEnum } from '../../src/models/enums/IconEnum';
import { Header } from '../../src/models/interfaces/Portfolio/Header';

export const header: Header = {
  name: 'Mario Vidal Domínguez',
  role: 'Software Engineer at eDreams',
  description:
    'Experienced Software Engineer with a passion for Clean Code and teamwork',
  navBarProps: [
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
  iconListProps: [
    {
      id: '1',
      name: IconEnum.GITHUB,
      href: 'https://github.com/Mariovido',
      target: '_blank',
    },
    {
      id: '2',
      name: IconEnum.LINKEDIN,
      href: 'https://www.linkedin.com/in/mariovidaldominguez/',
      target: '_blank',
    },
  ],
};
