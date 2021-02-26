document.addEventListener("DOMContentLoaded", () => {
  for (const table of document.querySelectorAll("table[data-stem]")) {
    const stem = table.getAttribute("data-stem")
    for (const td of table.querySelectorAll("td"))
      td.innerHTML = td.innerHTML.replace(stem, `<span class="stem">${stem}</span>`)
  }


})