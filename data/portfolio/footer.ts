import { Footer } from '../../src/models/interfaces/Portfolio/Footer';

export const footer: Footer = {
  paragraphs: [
    {
      id: '1',
      paragraph:
        "Designed with passion in $$$vscode$$$, this website comes to life with $$$react$$$, $$$vite$$$, $$$typescript$$$, and $$$scss$$$. It's the product of creative tech wizardry.",
      links: [
        {
          tag: 'vscode',
          name: 'Visual Studio Code',
          link: 'https://code.visualstudio.com',
          target: '_blank',
        },
        {
          tag: 'react',
          name: 'React',
          link: 'https://react.dev',
          target: '_blank',
        },
        {
          tag: 'vite',
          name: 'Vite',
          link: 'https://vitejs.dev',
          target: '_blank',
        },
        {
          tag: 'typescript',
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org',
          target: '_blank',
        },
        {
          tag: 'scss',
          name: 'SASS (SCSS)',
          link: 'https://sass-lang.com',
          target: '_blank',
        },
      ],
    },
  ],
};
