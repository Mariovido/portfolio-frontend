import { RingLoader } from 'react-spinners';
import { CONSTANTS } from '../../../config/constants';
import { CSSProperties } from 'react';
import { SpinnerProps } from '../../../models/interfaces/shared/Common/SpinnerProps';

function Spinner(props: SpinnerProps) {
  const { size, loading, speed } = props;

  const styles: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <RingLoader
      size={size ?? 150}
      color={CONSTANTS.primaryColor}
      loading={loading}
      cssOverride={styles}
      speedMultiplier={speed}
    />
  );
}

export default Spinner;
