import { Link, useNavigate } from 'react-router-dom';
import { NavBarProps } from '../../../models/interfaces/shared/Navigation/NavBarProps';
import { useCallback, useEffect, useState } from 'react';

import './styles/NavBar.scss';

function NavBar(props: NavBarProps) {
  const [activeBar, setActiveBar] = useState(0);
  const navigate = useNavigate();

  const { navBarProps } = props;

  // TODO - RETOCAR ACORDE A LOS BOOLEANOS
  const listenScrollEvent = (event: Event) => {
    event.preventDefault();

    const offset = 93;

    const aboutSectionOffsetTop =
      document.getElementById('about')?.offsetTop ?? 0;
    const experienceSectionOffsetTop =
      document.getElementById('experience')?.offsetTop ?? 0;
    const educationSectionOffsetTop =
      document.getElementById('education')?.offsetTop ?? 0;

    if (
      window.scrollY <
      experienceSectionOffsetTop - aboutSectionOffsetTop - offset
    )
      return setActiveBar(0);
    else if (
      window.scrollY <
      educationSectionOffsetTop - aboutSectionOffsetTop - offset
    )
      return setActiveBar(1);
    else return setActiveBar(2);
  };

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
  }, []);

  useEffect(() => {
    const location = window.location.hash;

    changeActiveBar(location);
  }, [navBarProps, changeActiveBar]);

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const location = target.href.split('#');

    changeActiveBar(`#${location[1]}`);

    navigate(`/#${location[1]}`);
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
