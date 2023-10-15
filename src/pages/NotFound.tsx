import { useNavigate } from 'react-router-dom';
import Cursor from '../components/shared/Common/Cursor';
import Button from '../components/shared/UI/Buttons/Button';
import { ButtonVariants } from '../utils/variants/variants';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/NotFound.scss';

function NotFound() {
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigate('/');
  };
  return (
    <>
      <Cursor />
      <div className="not-found">
        <Button
          handleOnClick={handleOnClick}
          whileHover="hover"
          animate="rest"
          variants={ButtonVariants}
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <span>Back</span>
        </Button>
        <div className="not-found-content">
          <h1>404</h1>
          <div>
            <h2>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
