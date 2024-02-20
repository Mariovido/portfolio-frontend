export interface FilterProps {
  options: {
    label: string;
    type?: string;
    filter: string;
    values: string[];
  }[];
  onFilterChange: (filters: Record<string, string>) => void;
}
