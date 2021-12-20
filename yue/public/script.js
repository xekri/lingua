document.addEventListener("DOMContentLoaded", () => {
  const [input, divSelect, output] = document.querySelectorAll("#convert textarea, #convert div");

  if (window.location.href.indexOf("?") == -1)
    window.location.href = "/?s=" + encodeURIComponent(input.value);

  input.addEventListener("focusout", () => {
    window.location.href = "/?s=" + encodeURIComponent(input.value);
  });

  const onSelect = () => {
    output.innerHTML = divSelect.innerHTML;
    for (const select of output.querySelectorAll("select")) {
      const span = document.createElement("span");
      span.innerHTML = select.value;
      const klass = "no-emc";
      if (select.selectedOptions[0].classList.contains(klass))
        span.classList.add(klass)
      select.replaceWith(span);
    }
  };

  for (const select of document.getElementsByTagName("select")) {
    select.addEventListener("change", event => {
      for (const option of event.target.options)
        option.removeAttribute("selected")
      event.target.selectedOptions[0].setAttribute("selected", "selected");
      onSelect();
    });
  }

  divSelect.addEventListener("input", onSelect);
  onSelect();
});