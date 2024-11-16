import { useLocation, useNavigate } from 'react-router-dom';
import CV from '../assets/doc/CV.pdf';
import CV_ES from '../assets/doc/CV_ES.pdf';
import Button from '../components/shared/UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faDownload,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants } from '../utils/variants/variants';
import { StateLocation } from '../models/interfaces/pages/StateLocation';
import Cursor from '../components/shared/Common/Cursor';
import { CONFIG } from '../config/config';
import { CONSTANTS } from '../config/constants';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Pdf from '../components/shared/Common/Pdf';
import RubberText from '../components/shared/UI/Text/RubberText';

import './styles/Resume.scss';
import { useState } from 'react';

function Resume() {
  const location = useLocation() as StateLocation;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [language, setLanguage] = useState(true);

  const { state } = location;

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
    element.href = language ? CV : CV_ES;
    element.download = 'CV_Mario.pdf';
    element.click();
  };

  const handleOnClickLanguage = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event?.preventDefault();

    setLanguage(!language);
  };

  return (
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
            <RubberText word={'CV'} />
          </h1>
        ) : null}
        <div className="resume-header-buttons">
          <Button
            handleOnClick={handleOnClickLanguage}
            whileHover="hover"
            animate="rest"
            variants={ButtonVariants}
            className="resume-header-button resume-header-button-right"
          >
            <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
          </Button>
          <Button
            handleOnClick={handleOnClickDownload}
            whileHover="hover"
            animate="rest"
            variants={ButtonVariants}
            className="resume-header-button resume-header-button-right"
          >
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </Button>
        </div>
      </header>
      <div className="resume-pdf">
        <Pdf pdf={language ? CV : CV_ES} />
      </div>
    </div>
  );
}

export default Resume;
