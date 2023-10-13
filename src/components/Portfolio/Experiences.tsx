import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../../models/interfaces/UI/Cards/ExperienceProps';
import ExperienceList from '../shared/Lists/ExperienceList';
import LinkIcon from '../shared/UI/Icons/LinkIcon';
import {
  ResumeIconVariants,
  ResumeVariants,
} from '../../utils/variants/variants';

import './styles/Experiences.scss';

function Experiences() {
  // TODO - CALL API
  const experienceListProps: Experience[] = [
    {
      id: '1',
      role: 'Software Engineer',
      company: 'Company 1',
      companyLink: 'https://apple.com',
      description:
        'expect wrapped somehow strip action stay kitchen drive during sudden railroad flower ill grandmother hang principal bare education ought track twelve properly receive exactThis is a ',
      date: new Date().toDateString(),
      tags: [
        {
          id: '1',
          name: 'React',
        },
        {
          id: '2',
          name: 'Node',
        },
      ],
      links: [
        {
          id: '1',
          name: 'Github',
          link: 'http://github.com',
        },
        {
          id: '2',
          name: 'Youtube',
          link: 'http://youtube.com',
        },
      ],
    },
    {
      id: '2',
      role: 'Software Engineer',
      company: 'Company 1',
      companyLink: 'https://apple.com',
      description:
        'expect wrapped somehow strip action stay kitchen drive during sudden railroad flower ill grandmother hang principal bare education ought track twelve properly receive exactThis is a ',
      date: new Date().toDateString(),
      tags: [
        {
          id: '1',
          name: 'React',
        },
        {
          id: '2',
          name: 'Node',
        },
      ],
      links: [
        {
          id: '1',
          name: 'Github',
          link: 'http://github.com',
        },
      ],
    },
    {
      id: '3',
      role: 'Software Engineer',
      company: 'Company 1',
      companyLink: 'https://apple.com',
      description:
        'expect wrapped somehow strip action stay kitchen drive during sudden railroad flower ill grandmother hang principal bare education ought track twelve properly receive exactThis is a ',
      date: new Date().toDateString(),
      tags: [
        {
          id: '1',
          name: 'React',
        },
        {
          id: '2',
          name: 'Node',
        },
      ],
      links: [
        {
          id: '1',
          name: 'Github',
          link: 'http://github.com',
        },
      ],
    },
  ];

  return (
    <section id="experience">
      <div>
        <ExperienceList experienceListProps={experienceListProps} />
        <div className="experience-resume-content">
          <LinkIcon
            isAnchor={false}
            linkProps={{
              href: 'http://github.com',
              target: '_blank',
              whileHover: 'hover',
              animate: 'rest',
              variants: ResumeVariants,
            }}
            iconProps={{ icon: faArrowRight, variants: ResumeIconVariants }}
            beforeText="View full resume"
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
