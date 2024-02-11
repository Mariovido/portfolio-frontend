export interface FilterProps {
  options: {
    label: string;
    filter: string;
    values: string[];
  }[];
  onFilterChange: (filters: Record<string, string>) => void;
}
