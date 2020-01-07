window.addEventListener("load", () => setInterval(update, 100));

const update = () => {
  const elemIsSpecified = document.getElementById("isSpecified");
  const elemSpecified   = document.getElementById("specified");

  const isSpecified = elemIsSpecified.checked;
  let date = isSpecified
    ? new Date(elemSpecified.value)
    : new Date();

  const [year, isLeap, yearday, month, monthday, week, weekday, dayName, daytime] = dateToSc(date);

  const dayNameFull = dayName + (weekdayNames.includes(dayName) ? "day" : " day");
  const dayNameShort = weekdayNames.includes(dayName) ? dayName.slice(0, 3) : dayName;

  const greg = date.toLocaleString();
  document.getElementById("gregorian").innerText = greg;
  for(let b of [10, 16]) {
    const isHex = (b === 16 ? 1 : 0)
    document.getElementById(`yearday${b}`).innerText  = yearday.toString(b);
    document.getElementById(`year${b}`).innerText     = year.toString(b);
    document.getElementById(`month${b}`).innerText    = `${month.toString(b)} ${monthNames[month]}`;
    document.getElementById(`week${b}`).innerText     = week.toString(b);
    document.getElementById(`monthday${b}`).innerText = monthday.toString(b);
    document.getElementById(`weekday${b}`).innerText  = `${weekday} ${dayNameFull}`;
    const daytimeStr = daytime.toString(b).slice(1, 7 - isHex);
    document.getElementById(`daytime${b}`).innerText  = daytimeStr;
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
      + encodeURI(`${isSpecified ? greg : "the current date and time"} is\n`)
      + document.getElementById(`formal${b}`).innerText + encodeURI("\n")
      + document.getElementById(`informal${b}`).innerText + encodeURI("\n")
      + window.location.href
      + "&hashtags=sumi_calendar"
      + `&via=${global.twitter}`
    );
  }
};