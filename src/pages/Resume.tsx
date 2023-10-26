import { useLocation, useNavigate } from 'react-router-dom';
import CV from '../assets/doc/CV.pdf';
import Button from '../components/shared/UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants } from '../utils/variants/variants';
import { ResumeLocation } from '../models/interfaces/pages/ResumeLocation';
import Cursor from '../components/shared/Common/Cursor';
import { CONFIG } from '../config/config';
import { CONSTANTS } from '../config/constants';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Pdf from '../components/shared/Common/Pdf';

import './styles/Resume.scss';

function Resume() {
  const location = useLocation() as ResumeLocation;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const { state } = location;
  const h1Array = 'CV'.split('').map((letter, index) => {
    return { index: ++index, char: letter };
  });

  const handleOnClickBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state?.prevPath) {
      navigate(-1);
    } else navigate(`${CONFIG.VITE_REACT_APP_BASE_URL}`);
  };

  const handleOnClickDownload = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const element = document.createElement('a');
    element.href = CV;
    element.download = 'CV_Mario.pdf';
    element.click();
  };

  return (
    <>
      <div className="resume">
        <Cursor />
        <header className="resume-header">
          <Button
            handleOnClick={handleOnClickBack}
            whileHover="hover"
            animate="rest"
            variants={ButtonVariants}
            className="resume-header-button resume-header-button-back"
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            <span>Back</span>
          </Button>
          {width >= CONSTANTS.maxWidthPhone ? (
            <h1>
              {h1Array.map((h1Char) => (
                <span key={h1Char.index}>{h1Char.char}</span>
              ))}
            </h1>
          ) : null}
          <Button
            handleOnClick={handleOnClickDownload}
            whileHover="hover"
            animate="rest"
            variants={ButtonVariants}
            className="resume-header-button resume-header-button-download"
          >
            <span>Download</span>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </Button>
        </header>
        <div className="resume-pdf">
          <Pdf pdf={CV} />
        </div>
      </div>
    </>
  );
}

export default Resume;
