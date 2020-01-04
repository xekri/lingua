const monthNames =
  [ "january"
  , "february"
  , "march"
  , "april"
  , "may"
  , "june"
  , "sol"
  , "july"
  , "august"
  , "september"
  , "october"
  , "november"
  , "december"
  ]

const weekdayNames =
  [ "mon"
  , "tues"
  , "wednes"
  , "thurs"
  , "fri"
  , "satur"
  , "sun"
  ]


window.addEventListener("load", () => setInterval(update, 100));

const update = () => {
  const elemIsSpecified = document.getElementById("isSpecified");
  const elemSpecifyDate = document.getElementById("specifyDate");
  const elemSpecifyTime = document.getElementById("specifyTime");

  let date = elemIsSpecified.checked
    ? new Date(`${elemSpecifyDate.value} ${elemSpecifyTime.value}`)
    : new Date();
  let year = date.getFullYear();
  const date0 = new Date(year, 0, 1);
  const msec = (date - date0) + ((date0.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const msecPerDay = 1000 * 60 * 60 * 24;
  const yeartime = msec / msecPerDay
  const yearday = Math.floor(yeartime);
  let daytime = yeartime % 1;

  const isLeap =  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

  const fromYearday = (yearday) => {
    let month = 0;
    let monthday = yearday;
    let dayName = null;
    while(0) {
      if(isLeap && [month, monthday] === [5, 28]) {
        dayName = "leap";
        break;
      }
      else if([month, monthday] === [12, 28]) {
        dayName = "year";
        break;
      }
      else if(monthday < 28) {
        break;
      }
      else {
        monthday -= (isLeap && month === 5) ? 29 : 28;
        month ++;
      }
    }
    let weekday = dayName ? -1 : monthday % 7;
    return [
      month
      , monthday
      , Math.floor(monthday / 7)
      , weekday
      , dayName || weekdayNames[weekday]
    ];
  }
  const [month, monthday, week, weekday, dayName] = fromYearday(yearday);
  year += 10000;

  const dayNameFull = dayName + (weekdayNames.includes(dayName) ? "day" : " day");
  const dayNameShort = weekdayNames.includes(dayName) ? dayName.slice(0, 3) : dayName;

  for(let b of [10, 16]) {
    const isHex = (b === 16 ? 1 : 0)
    document.getElementById(`yearday${b}`).innerText  = yearday.toString(b);
    document.getElementById(`year${b}`).innerText     = year.toString(b);
    document.getElementById(`month${b}`).innerText    = `${month.toString(b)} ${monthNames[month]}`;
    document.getElementById(`week${b}`).innerText     = week.toString(b);
    document.getElementById(`monthday${b}`).innerText = monthday.toString(b);
    document.getElementById(`weekday${b}`).innerText  = `${weekday} ${dayNameFull}`;
    const daytimeStr = daytime.toString(b).slice(1, 7 - isHex);
    document.getElementById(`daytime${b}`).innerText  = daytimeStr ;
    document.getElementById(`formal${b}`).innerText =
      `SC${isHex ? "" : 10}//${year.toString(b)}/${month.toString(b).padStart(2 - isHex, "0")}/${monthday.toString(b).padStart(2 - isHex, "0")}`
      + daytimeStr;
    document.getElementById(`informal${b}`).innerText =
      `${year.toString(b)}, ${monthNames[month]}`
      + ` ${monthday.toString(b)} (${dayNameFull})`
      + " " + daytimeStr;

    const elemTweet = document.getElementById(`tweet${b}`);
    elemTweet.setAttribute("href",
      "https://twitter.com/intent/tweet?text="
      + encodeURI("the current date and time is\n")
      + document.getElementById(`formal${b}`).innerText.slice(0, -3 + isHex) + encodeURI(" (")
      + document.getElementById(`informal${b}`).innerText.slice(0, -3 + isHex) + encodeURI(")\n")
      + window.location.href
      + "&hashtags=sumi_calendar"
    );
  }
};