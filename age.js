function getUsersDate() {
  return Date.parse(prompt("Enter date, e.g. 1990-01-01, :"));
}

function getTimeElapsedInYears(timeInMilliseconds) {
  return Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24 * 365));
}

console.log(getTimeElapsedInYears(Date.now() - getUsersDate()));
