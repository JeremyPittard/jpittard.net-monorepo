export const PrefersColourSchemeDark = () => {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;
};

export const getA11y = (url: string) => {
  fetch(`/api/a11y?page=${url}`)
    .then((res) => res.json())
    .then((data) => console.log("this is data", data));
};
