export const getDifferenceInSecondsBetweenTwoDates = (date1, date2) => {
  const difference = Math.abs(date1 - date2);
  return difference / 1000;
};
