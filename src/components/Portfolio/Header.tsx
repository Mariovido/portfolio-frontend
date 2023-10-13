import { Link } from 'react-router-dom';
import { NavBarProp } from '../../models/interfaces/Navigation/NavBarProps';
import { Icon } from '../../models/interfaces/UI/Icons/IconProps';
import IconList from '../shared/Lists/IconList';
import NavBar from '../shared/Navigation/NavBar';

import './styles/Header.scss';
import { IconEnum } from '../../models/enums/IconEnum';

function Header() {
  // TODO - CALL API
  const navBarProps: NavBarProp[] = [
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
  ];
  // TODO - CALL API
  const iconListProps: Icon[] = [
    {
      id: '1',
      name: IconEnum.GITHUB,
      href: 'https://github.com',
      target: '_blank',
    },
    {
      id: '2',
      name: IconEnum.LINKEDIN,
      href: 'https://linkedin.com',
      target: '_blank',
    },
  ];

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div>
        <Link to="/" onClick={handleOnClick}>
          <h1 className="name">Mario Vidal Domínguez</h1>
        </Link>
        <h2 className="role">Software Engineer at eDreams</h2>
        <p className="description">
          I build reliable and accessible products and build experiences
        </p>
        <NavBar navBarProps={navBarProps} />
      </div>
      <IconList iconListProps={iconListProps} />
    </header>
  );
}

export default Header;
