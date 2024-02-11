import { CONSTANTS } from '../config/constants';
import { DifficultyEnum } from '../models/enums/DifficultyEnum';
import { StatusEnum } from '../models/enums/StatusEnum';

export const getColorFromDifficulty = (difficulty: DifficultyEnum): string => {
  if (difficulty == DifficultyEnum.EASY) return CONSTANTS.difficultyEasyColor;
  else if (difficulty == DifficultyEnum.MEDIUM)
    return CONSTANTS.difficultyMediumColor;
  else return CONSTANTS.difficultyHardColor;
};

export const getColorFromStatus = (status: StatusEnum): string => {
  if (status == StatusEnum.TO_DO) return CONSTANTS.statusToDoColor;
  else if (status == StatusEnum.IN_PROGRESS)
    return CONSTANTS.statusInProgressColor;
  else return CONSTANTS.statusDoneColor;
};
