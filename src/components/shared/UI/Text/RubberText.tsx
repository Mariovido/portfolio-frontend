import { RubberTextProps } from '../../../../models/interfaces/shared/UI/Text/RubberTextProps';
import { Fragment } from 'react';

import './styles/RubberText.scss';

function RubberText(props: RubberTextProps) {
  const { word, style } = props;

  const words = word.split(' ');

  const h1Array = words.map((word) =>
    word.split('').map((letter, index) => {
      return { index: ++index, char: letter };
    })
  );

  return (
    <>
      {h1Array.map((h1Word, wordIndex) => (
        <Fragment key={h1Word.length}>
          {h1Word.map((h1Char) => (
            <span key={h1Char.index} className="rubber-text" style={style}>
              {h1Char.char}
            </span>
          ))}
          {wordIndex < h1Array.length - 1 && <span>&nbsp;</span>}
        </Fragment>
      ))}
    </>
  );
}

export default RubberText;
