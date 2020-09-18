document.addEventListener("DOMContentLoaded", () => {
  const update = () => {
    document.getElementById("to").value = convert(
      document.getElementById("from").value,
      parseInt(document.getElementById("mode").value)
    )
  }


  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", update)

  update()
})