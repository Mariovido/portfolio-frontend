import { Constants } from '../models/interfaces/config/constants';
import { StyleVariables } from '../models/interfaces/shared/styles/StyleVariables';

import styles from '../utils/styles/_variables.module.scss';

const variables = JSON.parse(JSON.stringify(styles)) as StyleVariables;

export const CONSTANTS: Constants = {
  darkestColor: variables.darkestColor,
  darkColor: variables.darkColor,
  primaryColor: variables.primaryColor,
  lightColor: variables.lightColor,
  lightestColor: variables.lightestColor,
  difficultyEasyColor: variables.difficultyEasyColor,
  difficultyMediumColor: variables.difficultyMediumColor,
  difficultyHardColor: variables.difficultyHardColor,
  leetcodeColor: variables.leetcodeColor,
  hackerrankColor: variables.hackerrankColor,
  statusToDoColor: variables.statusToDoColor,
  statusInProgressColor: variables.statusInProgressColor,
  statusDoneColor: variables.statusDoneColor,
  minWidthPc: parseInt(variables.minWidthPc?.slice(0, -2)),
  maxWidthPhone: parseInt(variables.maxWidthPhone?.slice(0, -2)),
  minWidthPhone: parseInt(variables.minWidthPhone?.slice(0, -2)),
};
