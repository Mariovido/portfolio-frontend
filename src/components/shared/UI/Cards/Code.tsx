import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { addTags } from '../../../../utils/convertMdToString';
import { useRef } from 'react';
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import './styles/Code.scss';

function Code(
  props: React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> &
    ExtraProps
) {
  const codeRef = useRef<HTMLPreElement>(null);
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className ?? '');
  const code = children ? (
    <code
      {...rest}
      className={className}
      dangerouslySetInnerHTML={{
        __html: addTags(String(children)),
      }}
    />
  ) : (
    <code>{children}</code>
  );

  const copyCode = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard
        .writeText(codeText)
        .catch((error) => console.error('Unable to copy code: ', error));
    }
  };

  return match ? (
    <div id="code-container">
      <SyntaxHighlighter
        PreTag="div"
        language={match[1]}
        style={a11yDark}
        customStyle={{ backgroundColor: 'transparent', padding: 0 }}
        codeTagProps={{ ref: codeRef }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
      <Button className="code-button-copy" handleOnClick={copyCode}>
        <FontAwesomeIcon icon={faCopy} />
      </Button>
    </div>
  ) : (
    code
  );
}

export default Code;
