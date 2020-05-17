document.addEventListener("DOMContentLoaded", () => {
  // mobile menu switch
  const sw = document.getElementById("nav-switch");
  const nav = document.getElementsByTagName("nav")[0];
  sw.onclick = () => {
    nav.style["display"] =
      nav.style["display"] === "none"
        ? "block"
        : "none"
        ;
  };

  // submenu
  const section = document.getElementsByTagName("section")[0];
  const subsections = Array.prototype.filter.call(section.childNodes, child => child.tagName === "SECTION");
  const submenu = document.getElementById("submenu");

  if(subsections.length > 0) {
    const ul = document.createElement("ul");

    const a = document.createElement("a");
    a.setAttribute("href", "#" + section.getAttribute("id"));
    a.append(document.createTextNode("/"));
    const li = document.createElement("li");
    li.append(a);
    ul.append(li);

    ul.setAttribute("id", "submenu");
    for(const subsection of subsections) {
      const title = subsection.getAttribute("id");
      const a = document.createElement("a");
      a.setAttribute("href", "#" + title);
      a.append(document.createTextNode(title));
      const li = document.createElement("li");
      li.append(a);
      ul.append(li);
    }
    submenu.append(ul);
  }
  else
    submenu.remove();

  // date
  setInterval(() => {
    const [year, isLeap, yearday, month, monthday, week, weekday, dayName, daytime] = dateToSc(new Date());
    document.getElementById("datetime").innerText =
      `${year.toString()}/${yearday.toString()}${daytime.toString().slice(1, 7)}`
  }, 100);
});
