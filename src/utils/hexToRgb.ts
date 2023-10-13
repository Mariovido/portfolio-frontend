export const hexToRgb = (hex: string, alpha?: number): string => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  else return `rgb(${red}, ${green}, ${blue})`;
};
