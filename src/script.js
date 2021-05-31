document.addEventListener("DOMContentLoaded", async () => {
  // submenu
  const section = document.getElementsByTagName("section")[0];
  const subsections = Array.prototype.filter.call(section.childNodes, child => child.tagName === "SECTION");
  const submenu = document.getElementById("submenu");

  section.removeAttribute("id");

  if (subsections.length > 0) {
    const ul = document.createElement("ul");

    const aParent = document.createElement("a");
    aParent.setAttribute("href", "..");
    aParent.append(document.createTextNode("../"));
    const liParent = document.createElement("li");
    liParent.append(aParent);
    ul.append(liParent);

    const a = document.createElement("a");
    a.setAttribute("href", "");
    a.append(document.createTextNode("./"));
    const li = document.createElement("li");
    li.append(a);
    ul.append(li);

    ul.setAttribute("id", "submenu");
    for (const subsection of subsections) {
      const title = subsection.getAttribute("id");
      const a = document.createElement("a");
      a.setAttribute("href", "#" + encodeURIComponent(title));
      a.append(document.createTextNode(title));
      const li = document.createElement("li");
      li.append(a);
      ul.append(li);
    }
    submenu.append(ul);
  } else
    submenu.remove();

  // date
  setInterval(() => {
    document.getElementById("datetime").innerText = dateString(...now());
  }, 100);
});