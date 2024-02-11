export const convertMdToString = (filePath: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`Failed to fetch ${filePath}`));
        }

        return response.text();
      })
      .then(resolve)
      .catch(reject);
  });
};

export const addTags = (inputString: string): string => {
  return inputString
    .replace(/<=/g, '&le;')
    .replace(/>=/g, '&ge;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\^(\d+)/g, '<sup>$1</sup>');
};
