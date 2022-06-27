function getAge(dateString) {
  const dateInMilliseconds = Date.parse(dateString);
  const currentDateInMilliseconds = Date.now();

  function getTimeInYears(timeInMilliseconds) {
    return Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  }

  return getTimeInYears(currentDateInMilliseconds - dateInMilliseconds);
}

console.log(getAge("1972-12-04"));
