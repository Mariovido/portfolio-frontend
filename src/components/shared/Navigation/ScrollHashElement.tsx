import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str: string) => {
      return str.slice(1);
    };

    if (hash) return document.getElementById(removeHashCharacter(hash));
    else return null;
  }, [location]);

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const hashElement = document.getElementById(hash.slice(1));

      if (hashElement) {
        const timeoutId: NodeJS.Timeout = setTimeout(() => {
          hashElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });

          return clearTimeout(timeoutId);
        }, 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hashElement)
      hashElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    else window.scrollTo(0, 0);
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
