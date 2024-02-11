import { Link, useNavigate } from 'react-router-dom';
import { NavBarProps } from '../../../models/interfaces/shared/Navigation/NavBarProps';
import { useCallback, useEffect, useState } from 'react';
import { CONFIG } from '../../../config/config';

import './styles/NavBar.scss';

function NavBar(props: Readonly<NavBarProps>) {
  const [activeBar, setActiveBar] = useState(0);
  const navigate = useNavigate();

  const { navBarProps } = props;

  const listenScrollEvent = useCallback(
    (event: Event) => {
      event.preventDefault();

      const offset = 93;

      const sectionsOffsetTop = navBarProps.map(
        (navBarProp) =>
          document.getElementById(navBarProp.name.toLowerCase())?.offsetTop ?? 0
      );

      for (let i = 0; i < sectionsOffsetTop.length - 1; i++) {
        if (
          window.scrollY <
          sectionsOffsetTop[i + 1] - sectionsOffsetTop[0] - offset
        ) {
          return setActiveBar(i);
        }
      }

      return setActiveBar(sectionsOffsetTop.length - 1);
    },
    [navBarProps]
  );

  const changeActiveBar = useCallback(
    (hash: string) => {
      if (!hash) return;

      let activeBarIndex = 0;
      for (const [index, navBarProp] of navBarProps.entries()) {
        if (navBarProp.href === `${hash}`) activeBarIndex = index;
      }
      setActiveBar(activeBarIndex);
    },
    [navBarProps]
  );

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, [listenScrollEvent]);

  useEffect(() => {
    const location = window.location.hash;

    changeActiveBar(location);
  }, [navBarProps, changeActiveBar]);

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const location = target.href.split('#');

    changeActiveBar(`#${location[1]}`);

    navigate(`${CONFIG.VITE_REACT_APP_BASE_URL}#${location[1]}`);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navBarProps.map((navBarProp, index) => (
          <li key={navBarProp.name} className="navbar-list-item">
            <Link
              className={
                activeBar === index
                  ? 'navbar-list-item-active'
                  : 'navbar-list-item-a'
              }
              to={`${navBarProp.href}`}
              onClick={handleOnClick}
            >
              {navBarProp.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
