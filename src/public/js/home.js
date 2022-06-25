const category_btns = document.querySelectorAll(".category_btns");
const category_list = document.querySelectorAll(".category_list");
const hero_img = document.querySelector(".hero_img");

category_list[0].classList.add("nono");
category_btns[0].classList.add("activate");

for (let i = 0; i < category_btns.length; i++) {
  category_btns[i].addEventListener("click", () => {
    for (let j = 0; j < category_list.length; j++) {
      category_list[j].classList.remove("nono");
      category_btns[j].classList.remove("activate");
    }
    category_list[i].classList.add("nono");
    category_btns[i].classList.add("activate");
    hero_img.setAttribute("src", category_list[i].dataset.categoryImg);
  });
}
