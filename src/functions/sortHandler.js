export const sortHandler = (nameOfProperty, arrayOfObjects) => {
  if (!nameOfProperty) return arrayOfObjects;
  return arrayOfObjects.sort((a, b) => b[nameOfProperty] - a[nameOfProperty]);
};
