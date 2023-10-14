import { Educations } from '../src/models/interfaces/Portfolio/Educations';
import { Header } from '../src/models/interfaces/Portfolio/Header';
import { Experiences } from '../src/models/interfaces/Portfolio/Experiences';
import { Footer } from '../src/models/interfaces/Portfolio/Footer';
import { header } from './portfolio/header';
import { education } from './portfolio/educations';
import { experience } from './portfolio/experience';
import { footer } from './portfolio/footer';
import { About, about } from './portfolio/about';

export interface Data {
  header: Header;
  about: About;
  experience: Experiences;
  education: Educations;
  footer: Footer;
}

export const data: Data = {
  header: header,
  about: about,
  experience: experience,
  education: education,
  footer: footer,
};
