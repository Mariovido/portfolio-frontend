import { CONSTANTS } from '../config/constants';
import { DifficultyEnum } from '../models/enums/DifficultyEnum';
import { PlatformEnum } from '../models/enums/PlatformEnum';
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

export const getColorFromPlatform = (platform: PlatformEnum): string => {
  if (platform == PlatformEnum.LEETCODE) return CONSTANTS.leetcodeColor;
  else return CONSTANTS.hackerrankColor;
};
