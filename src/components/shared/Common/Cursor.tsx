import { useEffect, useState } from 'react';
import { MouseCoordinates } from '../../../models/interfaces/Common/Coordinates';
import { StyleVariables } from '../../../models/interfaces/styles/StyleVariables';
import { hexToRgb } from '../../../utils/hexToRgb';

import './styles/Cursor.scss';
import styles from '../../../utils/styles/_variables.module.scss';

const variables = JSON.parse(JSON.stringify(styles)) as StyleVariables;

function Cursor() {
  const [mouseCoordinates, setMouseCoordinates] = useState<MouseCoordinates>({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event: MouseEvent) => {
    setMouseCoordinates({
      x: event.pageX,
      y: event.pageY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        background: `radial-gradient(600px at ${mouseCoordinates.x}px ${
          mouseCoordinates.y
        }px, ${hexToRgb(variables.primaryColor, 0.15)}, transparent 80%)`,
      }}
    ></div>
  );
}

export default Cursor;
