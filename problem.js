const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function daysUntil1JanuaryOfYear(year) {
  return (year - 1900) * 365 + Math.floor((year - 1 - 1900) / 4) + 1;
}

function daysOfYear(day, month, year) {
  var totalDaysOfYear = 0;
  var i = 1
  while (i < month) {
    totalDaysOfYear += daysPerMonth[i - 1];
    i++;
  }
  if ((year % 4) == 0 && month >= 3) {
    totalDaysOfYear++;
  }
  
  totalDaysOfYear += day - 1;
  return totalDaysOfYear;
}

function daysUntilDate(day, month, year) {
  return daysUntil1JanuaryOfYear(year) + daysOfYear(day, month, year);
}

function howManyDaysHaveYouLived(day, month, year) {
  return daysUntilDate(24, 4, 2020) - daysUntilDate(day, month, year);
}


console.log(howManyDaysHaveYouLived(18, 1, 1989));
console.log(howManyDaysHaveYouLived(4, 1, 2002));
console.log(howManyDaysHaveYouLived(14, 4, 1987));


