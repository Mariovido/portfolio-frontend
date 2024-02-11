import { Educations } from '../src/models/interfaces/Portfolio/Educations';
import { Header } from '../src/models/interfaces/Portfolio/Header';
import { Experiences } from '../src/models/interfaces/Portfolio/Experiences';
import { Footer } from '../src/models/interfaces/Portfolio/Footer';
import { Skills } from '../src/models/interfaces/Portfolio/Skills';
import { About } from '../src/models/interfaces/Portfolio/About';
import { header } from './portfolio/header';
import { education } from './portfolio/educations';
import { experience } from './portfolio/experience';
import { footer } from './portfolio/footer';
import { about } from './portfolio/about';
import { skill } from './portfolio/skill';
import { Projects } from '../src/models/interfaces/Portfolio/Projects';
import { project } from './portfolio/project';
import { Problems } from '../src/models/interfaces/Problems/Problem';
import { problems } from './problems/problems';

export interface Data {
  header: Header;
  about: About;
  experience: Experiences;
  education: Educations;
  project: Projects;
  skill: Skills;
  footer: Footer;
  problems: Problems;
}

export const data: Data = {
  header: header,
  about: about,
  experience: experience,
  education: education,
  project: project,
  skill: skill,
  footer: footer,
  problems: problems,
};
