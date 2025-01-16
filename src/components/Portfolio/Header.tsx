import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconList from '../shared/Lists/IconList';
import NavBar from '../shared/Navigation/NavBar';
import { Header } from '../../models/interfaces/Portfolio/Header';
import { data } from '../../../data/data';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useHttp from '../../hooks/useHttp';
import { CONFIG } from '../../config/config';
import { CONSTANTS } from '../../config/constants';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';

import './styles/Header.scss';

function Header() {
  const [headerInfo, setHeaderInfo] = useState<Header>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<Header>({
    isQuery: true,
    url: '/portfolio/:idUser/header',
    queryKey: ['header'],
    queryfn: () => data.header,
    errorMessage: 'Error while fetching the header section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) setHeaderInfo(response);
  }, [response]);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {headerInfo ? (
            <>
              <div>
                <Link
                  to={`${CONFIG.VITE_REACT_APP_BASE_URL}`}
                  onClick={handleOnClick}
                >
                  <h1 className="name">{headerInfo.name}</h1>
                </Link>
                <h2 className="role">{headerInfo.role}</h2>
                {headerInfo.secondary_role && (
                  <h2 className="secondary-role">
                    {headerInfo.secondary_role}
                  </h2>
                )}
                <p className="description">{headerInfo.description}</p>
                {width >= CONSTANTS.minWidthPc ? (
                  <NavBar navBarProps={headerInfo.navBar} />
                ) : null}
              </div>
              <IconList iconListProps={headerInfo.iconList} />
            </>
          ) : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </header>
  );
}

export default Header;
