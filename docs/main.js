document.addEventListener("DOMContentLoaded", () => {
  const ta0 = document.getElementById("from");
  const ta1 = document.getElementById("to");

  const update0 = () => {
    ta1.value = convert0(ta0.value,
      parseInt(document.getElementById("mode").value)
    );
  };

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", update0)

  ta1.addEventListener("input", () => {
    ta0.value = convert1(ta1.value);
  });

  update0();
});