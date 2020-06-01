const flatten = (array) =>
  array.reduce((acc, curr) => {
    acc.push(...curr);
  }, []);
export default flatten;
