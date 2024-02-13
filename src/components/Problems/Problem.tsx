import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CONFIG } from '../../config/config';
import { StateLocation } from '../../models/interfaces/pages/StateLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cursor from '../shared/Common/Cursor';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants } from '../../utils/variants/variants';
import Button from '../shared/UI/Buttons/Button';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { data } from '../../../data/data';
import { convertMdToString } from '../../utils/convertMdToString';
import Code from '../shared/UI/Cards/Code';
import RubberText from '../shared/UI/Text/RubberText';
import { Problem } from '../../models/interfaces/Problems/Problem';
import {
  getColorFromDifficulty,
  getColorFromPlatform,
} from '../../utils/getColor';
import Tab from '../shared/UI/Tabs/Tab';
import { StatusEnum } from '../../models/enums/StatusEnum';

import './styles/Problem.scss';

function Problem() {
  const [problem, setProblem] = useState<Problem>();
  const [description, setDescription] = useState<string>();
  const [solution, setSolution] = useState<string>();
  const { idProblem } = useParams();
  const location = useLocation() as StateLocation;
  const navigate = useNavigate();

  const { state } = location;

  useEffect(() => {
    const getData = async () => {
      const problemData = data.problems.problems.filter(
        (problem) => problem.id === idProblem
      )[0];
      const description = await convertMdToString(problemData.description);
      const solution = problemData.solution
        ? await convertMdToString(problemData.solution)
        : '';
      setDescription(description);
      setSolution(solution);
      setProblem(problemData);
    };

    getData();
  }, [idProblem]);

  const handleOnClickBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state?.prevPath) {
      navigate(-1);
    } else navigate(`${CONFIG.VITE_REACT_APP_BASE_URL}`);
  };

  const tabs = [
    {
      order: 0,
      title: 'Description',
      content: (
        <div className="problem-content">
          <Markdown components={{ code: Code }}>{description}</Markdown>
        </div>
      ),
    },
  ];

  problem?.status == StatusEnum.DONE &&
    tabs.push({
      order: 1,
      title: 'Solution',
      content: (
        <div className="problem-content">
          <Markdown components={{ code: Code }}>{solution}</Markdown>
        </div>
      ),
    });

  return (
    <div className="problem">
      <Cursor />
      <header className="problem-header">
        <Button
          handleOnClick={handleOnClickBack}
          whileHover="hover"
          animate="rest"
          variants={ButtonVariants}
          className="problem-header-button problem-header-button-back"
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <span>Back</span>
        </Button>
        {problem && (
          <h1 className="problem-title">
            <RubberText
              style={{ color: getColorFromDifficulty(problem.difficulty) }}
              word={`${problem.difficulty} `}
            />
            {problem?.platform && (
              <RubberText
                word={`- ${problem.platform.toString()}`}
                style={{
                  color: problem.platform
                    ? getColorFromPlatform(problem.platform)
                    : 'inherit',
                }}
              />
            )}
          </h1>
        )}
      </header>
      <Tab className="problem-tab-button" tabs={tabs} />
    </div>
  );
}

export default Problem;
