export interface TabProps {
  className?: string;
  tabs: {
    order: number;
    title: string;
    content: JSX.Element;
  }[];
}
