import { SkillListProps } from '../../../models/interfaces/shared/Lists/SkillListProps';
import ProgressBar from '../UI/Bars/ProgressBar';

import './styles/SkillList.scss';

function SkillList(props: SkillListProps) {
  const { skillListProps } = props;

  return (
    <ul className="skill-list">
      {skillListProps.map((skillProp) => (
        <li className="skill" key={skillProp.id}>
          {/* TODO - MAKE IT A LINK? */}
          <ProgressBar name={skillProp.name} progress={skillProp.progress} />
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
