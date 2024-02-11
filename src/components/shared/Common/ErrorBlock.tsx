import { ErrorFetch } from '../../../models/interfaces/Common/errorFetch';
import { ErrorBlockProps } from '../../../models/interfaces/shared/Common/ErrorBlockProps';

import './styles/ErrorBlock.scss';

function ErrorBlock(props: Readonly<ErrorBlockProps>) {
  const error = props.error as ErrorFetch;

  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <h2 className="error-block-title">
        {error.name} {error.code}
      </h2>
      <p className="error-block-message">{error.message}</p>
    </div>
  );
}

export default ErrorBlock;
