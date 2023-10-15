import { useLocation, useNavigate } from 'react-router-dom';
import CV from '../assets/doc/CV.pdf';
import Button from '../components/shared/UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants } from '../utils/variants/variants';
import { ResumeLocation } from '../models/interfaces/pages/ResumeLocation';
import Cursor from '../components/shared/Common/Cursor';

import './styles/Resume.scss';

function Resume() {
  const location = useLocation() as ResumeLocation;
  const navigate = useNavigate();

  const { state } = location;
  const h1Array = 'CV'.split('').map((letter, index) => {
    return { index: ++index, char: letter };
  });

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state?.prevPath) {
      navigate(-1);
    } else navigate('/');
  };

  return (
    <>
      <div className="resume">
        <Cursor />
        <header className="resume-header">
          <Button
            handleOnClick={handleOnClick}
            whileHover="hover"
            animate="rest"
            variants={ButtonVariants}
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            <span>Back</span>
          </Button>
          <h1>
            {h1Array.map((h1Char) => (
              <span key={h1Char.index}>{h1Char.char}</span>
            ))}
          </h1>
        </header>
        <iframe className="resume-pdf" src={CV} />
      </div>
    </>
  );
}

export default Resume;