"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const monthNames = ["january", "february", "march", "april", "may", "june", "sol", "july", "august", "september", "october", "november", "december"];
const weekdayNames = ["mon", "tues", "wednes", "thurs", "fri", "satur", "sun"];

const yeardayTo = (isLeap, yearday) => {
  let month = 0;
  let monthday = yearday;
  let dayName = null;

  while (month < 13) {
    if (isLeap && [month, monthday] === [5, 28]) {
      dayName = "leap";
      break;
    } else if ([month, monthday] === [12, 28]) {
      dayName = "year";
      break;
    } else if (monthday < 28) {
      break;
    } else {
      monthday -= isLeap && month === 5 ? 29 : 28;
      month++;
    }
  }

  let weekday = dayName ? -1 : monthday % 7;
  return [month, monthday, Math.floor(monthday / 7), weekday, dayName || weekdayNames[weekday]];
};

const msecPerDay = 1000 * 60 * 60 * 24;

var _default = date => {
  let year = date.getFullYear();
  const date0 = new Date(year, 0, 1);
  const msec = date - date0 + (date0.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const yeartime = msec / msecPerDay;
  const yearday = Math.floor(yeartime);
  let daytime = yeartime % 1;
  const isLeap = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
  const [month, monthday, week, weekday, dayName] = yeardayTo(isLeap, yearday);
  return [year, isLeap, yearday, month, monthday, week, weekday, dayName, daytime];
};

exports.default = _default;