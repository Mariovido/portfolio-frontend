import { ProgressBarProps } from '../../../../models/interfaces/shared/UI/Bars/ProgressBarProps';

import './styles/ProgressBar.scss';

function ProgressBar(props: Readonly<ProgressBarProps>) {
  const { name, progress } = props;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">{name}</div>
      <div className="progress-bar">
        <div className="progress-bar-empty">
          <div className="progress-percentage">{progress}%</div>
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
