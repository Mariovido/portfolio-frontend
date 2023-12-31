import { useEffect, useState } from 'react';
import { MouseCoordinates } from '../../../models/interfaces/shared/Common/Coordinates';
import { hexToRgb } from '../../../utils/hexToRgb';
import { CONSTANTS } from '../../../config/constants';

import './styles/Cursor.scss';

function Cursor() {
  const [mouseCoordinates, setMouseCoordinates] = useState<MouseCoordinates>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      if (window.innerWidth >= CONSTANTS.minWidthPc)
        setMouseCoordinates({
          x: event.pageX,
          y: event.pageY,
        });
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        background: `radial-gradient(600px at ${mouseCoordinates.x}px ${
          mouseCoordinates.y
        }px, ${hexToRgb(CONSTANTS.primaryColor, 0.1)}, transparent 80%)`,
      }}
    ></div>
  );
}

export default Cursor;
