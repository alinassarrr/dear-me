const all = document.getElementsByClassName("nav-btn");
const select = (selected) => {
  const page = document.getElementById(selected);
  for (let item of all) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  }
  page.classList.add("active");
};

export default select;
