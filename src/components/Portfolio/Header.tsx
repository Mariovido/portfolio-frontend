import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconList from '../shared/Lists/IconList';
import NavBar from '../shared/Navigation/NavBar';
import { CONFIG } from '../../config/config';
import { Header } from '../../models/interfaces/Portfolio/Header';
import { data } from '../../../data/data';

import './styles/Header.scss';

function Header() {
  const [headerInfo, setHeaderInfo] = useState<Header>(data.header);

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setHeaderInfo(data.header);
    }
  }, []);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div>
        <Link to="/" onClick={handleOnClick}>
          <h1 className="name">{headerInfo.name}</h1>
        </Link>
        <h2 className="role">{headerInfo.role}</h2>
        <p className="description">{headerInfo.description}</p>
        <NavBar navBarProps={headerInfo.navBarProps} />
      </div>
      <IconList iconListProps={headerInfo.iconListProps} />
    </header>
  );
}

export default Header;
