let ul = document.getElementsByClassName("accordion-title");

const handleClick = (e) => {
  for (let i = 0; i < ul.length; i++) {
    if (ul[i] !== e.target) {
      ul[i].children[1].children[0].classList.add("off");
    }

    e.target.children[1].children[0].classList.toggle("off");
  }
};

for (let i = 0; i < ul.length; i++) {
  ul[i].children[1].children[0].classList.add("off");
  ul[i].addEventListener("click", handleClick);
}
