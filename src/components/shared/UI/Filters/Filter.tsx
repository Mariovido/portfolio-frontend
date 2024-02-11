import { useState } from 'react';
import Button from '../Buttons/Button';
import { FilterProps } from '../../../../models/interfaces/shared/UI/Filters/FilterProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

import './styles/Filter.scss';

function Filter(props: Readonly<FilterProps>) {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const { options, onFilterChange } = props;

  const handleFilterChange = (filter: string, value: string) => {
    const updatedFilters = { ...selectedFilters, [filter]: value };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  return (
    <div className="filter-container">
      {options.map((option) => (
        <div className="filter" key={option.label}>
          <label>{option.label}</label>
          <select
            value={selectedFilters[option.filter] || ''}
            onChange={(e) => handleFilterChange(option.filter, e.target.value)}
          >
            <option value="">All</option>
            {option.values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
      <Button className="reset-button" handleOnClick={handleResetFilters}>
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </Button>
    </div>
  );
}

export default Filter;
