import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/shared/UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants, LinkTableVariants } from '../utils/variants/variants';
import { StateLocation } from '../models/interfaces/pages/StateLocation';
import Cursor from '../components/shared/Common/Cursor';
import { CONFIG } from '../config/config';
import { CONSTANTS } from '../config/constants';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Table from '../components/shared/UI/Tables/Table';
import { useEffect, useState } from 'react';
import { Problem, Problems } from '../models/interfaces/Problems/Problem';
import { data } from '../../data/data';
import useHttp from '../hooks/useHttp';
import ErrorBlock from '../components/shared/Common/ErrorBlock';
import { Spinner } from '@react-pdf-viewer/core';
import TagList from '../components/shared/Lists/TagList';
import RubberText from '../components/shared/UI/Text/RubberText';
import {
  getColorFromDifficulty,
  getColorFromPlatform,
  getColorFromStatus,
} from '../utils/getColor';
import LinkIcon from '../components/shared/UI/Icons/LinkIcon';
import Filter from '../components/shared/UI/Filters/Filter';
import { DifficultyEnum } from '../models/enums/DifficultyEnum';
import { Tag } from '../models/interfaces/shared/UI/Tags/TagsProps';

import './styles/Problems.scss';

function ProblemsPage() {
  const [problemsInfo, setProblemsInfo] = useState<Problems>();
  const [problemsFiltered, setProblemsFiltered] = useState<Problems>();
  const location = useLocation() as StateLocation;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<
    Problems | Problem[]
  >({
    isQuery: true,
    url: '', // TODO - CHANGE URL
    queryKey: ['problems'],
    queryfn: () => data.problems,
    errorMessage: 'Error while fetching the problems',
    staleTime: 60000,
  });

  const { state } = location;

  useEffect(() => {
    if (response) {
      const responseAux = response as Problems;
      if (responseAux.problems) {
        setProblemsInfo(responseAux);
        setProblemsFiltered(responseAux);
      } else {
        const responseAux = response as Problem[];
        setProblemsInfo({ problems: responseAux });
        setProblemsFiltered({ problems: responseAux });
      }
    }
  }, [response]);

  const handleOnClickBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state?.prevPath) {
      navigate(-1);
    } else navigate(`${CONFIG.VITE_REACT_APP_BASE_URL}`);
  };

  const titles = ['Number', 'Difficulty', 'Title'];

  if (width >= CONSTANTS.minWidthPc) {
    titles.push('Platform');
    titles.push('Languages');
    titles.push('Companies');
  }

  if (width >= CONSTANTS.minWidthPhone) titles.push('Status');

  const tableValues = problemsFiltered
    ? problemsFiltered.problems.map((problem) => {
        const problemNumber = (
          <div className="problems-table-number">{problem.number}</div>
        );

        const problemDifficulty = (
          <div
            className="problems-table-difficulty"
            style={{ color: getColorFromDifficulty(problem.difficulty) }}
          >
            {problem.difficulty}
          </div>
        );

        LinkTableVariants.rest = {
          ...LinkTableVariants.rest,
          color: CONSTANTS.lightestColor,
          opacity: 0.8,
        };

        const problemTitle = (
          <LinkIcon
            isAnchor={false}
            linkProps={{
              className: 'problems-table-title',
              href: `problems/${problem.id}`,
              whileHover: 'hover',
              animate: 'rest',
              variants: LinkTableVariants,
            }}
            iconProps={{ icon: faFileCode, variants: LinkTableVariants }}
            beforeText={problem.title}
          />
        );

        const problemPlatform = (
          <div
            className="problems-table-platform"
            style={{
              color: problem.platform
                ? getColorFromPlatform(problem.platform)
                : 'inherit',
            }}
          >
            {problem.platform}
          </div>
        );

        const problemLanguages = (
          <div className="problems-table-languages">
            {problem.languages ? (
              <TagList tagListProps={problem.languages} />
            ) : null}
          </div>
        );

        const problemCompanies = (
          <div className="problems-table-companies">
            {problem.companies ? (
              <TagList tagListProps={problem.companies} />
            ) : null}
          </div>
        );

        const problemStatus = (
          <div
            className="problems-table-status"
            style={{ color: getColorFromStatus(problem.status) }}
          >
            {problem.status}
          </div>
        );

        const valuesTable = [problemNumber, problemDifficulty, problemTitle];

        if (width >= CONSTANTS.minWidthPc) {
          valuesTable.push(problemPlatform);
          valuesTable.push(problemLanguages);
          valuesTable.push(problemCompanies);
        }

        if (width >= CONSTANTS.minWidthPhone) valuesTable.push(problemStatus);

        return valuesTable;
      })
    : [];

  const optionsFilter = [
    {
      label: 'Number',
      type: 'text',
      filter: 'Number',
      values: problemsInfo?.problems
        ? problemsInfo.problems
            .map((problemInfo) => String(problemInfo.number))
            .filter(
              (number, index, self) =>
                index === self.indexOf(number) && number != 'undefined'
            )
            .sort((a, b) => (Number(a) > Number(b) ? 1 : -1))
        : [],
    },
    {
      label: 'Difficulty',
      filter: 'Difficulty',
      values: problemsInfo?.problems
        ? problemsInfo.problems
            .map((problemInfo) => problemInfo.difficulty)
            .filter(
              (difficulty, index, self) => index === self.indexOf(difficulty)
            )
            .sort((a, b) => {
              const difficultyOrder = {
                [DifficultyEnum.EASY]: 0,
                [DifficultyEnum.MEDIUM]: 1,
                [DifficultyEnum.HARD]: 2,
              };

              return difficultyOrder[a] - difficultyOrder[b];
            })
        : [],
    },
    {
      label: 'Title',
      type: 'text',
      filter: 'Title',
      values: problemsInfo?.problems
        ? problemsInfo.problems
            .map((problemInfo) => problemInfo.title)
            .filter((title, index, self) => index === self.indexOf(title))
        : [],
    },
    {
      label: 'Platform',
      filter: 'Platform',
      values: problemsInfo?.problems
        ? problemsInfo.problems
            .map((problemInfo) => String(problemInfo.platform))
            .filter(
              (platform, index, self) =>
                index === self.indexOf(platform) && platform != 'undefined'
            )
        : [],
    },
    {
      label: 'Companies',
      filter: 'Companies',
      values: problemsInfo?.problems
        ? problemsInfo.problems
            .reduce((uniqueCompanies: Tag[], problemInfo) => {
              if (problemInfo.companies)
                problemInfo.companies.forEach((company) => {
                  if (!uniqueCompanies.includes(company)) {
                    uniqueCompanies.push(company);
                  }
                });
              return uniqueCompanies;
            }, [])
            .map((company) => company.tag)
            .filter((company, index, self) => index === self.indexOf(company))
        : [],
    },
  ];

  const handleFilterChange = (filters: Record<string, string>) => {
    const number = filters.Number;
    const difficulty = filters.Difficulty;
    const platform = filters.Platform;
    const title = filters.Title;
    const companies = filters.Companies;

    if (problemsInfo) {
      const problemsFiltered = problemsInfo.problems.filter(
        (problem) =>
          (!number || String(problem.number).includes(number)) &&
          (!difficulty || problem.difficulty === difficulty) &&
          (!platform || problem.platform === platform) &&
          (!title ||
            problem.title.toLowerCase().includes(title.toLowerCase())) &&
          (!companies ||
            (problem.companies &&
              problem.companies.some((company) => company.tag === companies)))
      );
      setProblemsFiltered({ problems: problemsFiltered });
    }
  };

  problemsFiltered?.problems.sort((a, b) => {
    if (!a.number && b.number) {
      return 1;
    }
    if (a.number && !b.number) {
      return -1;
    }
    if (a.number && b.number && a.number !== b.number) {
      return a.number - b.number;
    }

    const difficultyOrder = {
      [DifficultyEnum.EASY]: 0,
      [DifficultyEnum.MEDIUM]: 1,
      [DifficultyEnum.HARD]: 2,
    };

    const difficultyComparison =
      difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    if (difficultyComparison !== 0) {
      return difficultyComparison;
    }

    if (!a.platform && b.platform) {
      return 1;
    }
    if (a.platform && !b.platform) {
      return -1;
    }
    if (a.platform && b.platform && a.platform !== b.platform) {
      return a.platform.localeCompare(b.platform);
    }

    return a.title.localeCompare(b.title);
  });

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="problems">
          <Cursor />
          <div className="problems-content">
            <Button
              handleOnClick={handleOnClickBack}
              whileHover="hover"
              animate="rest"
              variants={ButtonVariants}
              className="problems-header-button"
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              <span>Back</span>
            </Button>
            <h1 className="problems-title">
              <RubberText word={'All Problems'} />
            </h1>
            <Filter
              options={optionsFilter}
              onFilterChange={handleFilterChange}
            />
            <Table
              idTable={'problems-table'}
              titles={titles}
              values={tableValues}
            />
          </div>
        </div>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </>
  );
}

export default ProblemsPage;
