export interface Skill {
  id: string;
  name: string;
  progress: number;
}

export interface SkillProps {
  skillProps: Skill;
}
