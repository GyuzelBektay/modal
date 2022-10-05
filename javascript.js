document.querySelector(".btn-open").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("hide-modal");
  document.querySelector(".container").style.backgroundColor =
    "rgba(0,0,0,0.5)";
});

document.querySelector(".btn-close").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("hide-modal");
  document.querySelector(".container").style.backgroundColor = "pink";
});
