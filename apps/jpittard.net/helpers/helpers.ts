export const PrefersColourSchemeDark = () => {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;
};
