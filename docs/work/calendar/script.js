document.addEventListener("DomContentLoaded", async () => {
  const dateToSc = (await import("./calendar.js")).default;

  const specified   = document.getElementById("specified");

  const update = () => {
    const date = new Date(specified.value);
    const [year, isLeap, yearday, month, monthday, week, weekday, dayName, daytime] = dateToSc(date);
    const greg = date.toLocaleString();

    document.getElementById(`formal`).innerText =
      `SC//${year.toString()}/${month.toString()}/${monthday.toString(b)}${daytime}`;

    document.getElementById(`tweet`)
    .setAttribute("href",
      "https://twitter.com/share?text="
        + document.getElementById(`formal`).innerText + encodeURI("\n")
        + "&hashtags=sumi_calendar"
    );
  }

  specified.addEventListener("input", update)

  update();
});
