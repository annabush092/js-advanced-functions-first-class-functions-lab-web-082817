// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, func) {
  return func(driversArray);
}
