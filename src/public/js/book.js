const rate_circles = document.querySelectorAll(".rate_circles");
const rate_btn = document.querySelector(".rate_btn");
const rating_modal_btn = document.querySelector(".rating_modal_btn");
const modal_title = document.querySelector(".modal-title");

let rete_score = 0;
let book_id;

for (let i = 0; i < rate_circles.length; i++) {
  rate_circles[i].addEventListener("click", () => {
    rete_score = i + 1;
    for (let j = 0; j < rate_circles.length; j++) {
      rate_circles[j].style.color = "black";
    }
    for (let j = 0; j <= i; j++) {
      rate_circles[j].style.color = "orange";
    }
  });
}

rating_modal_btn.addEventListener("click", () => {
  rete_score = 0;
  modal_title.textContent = rating_modal_btn.dataset.currentBookName;
  book_id = rating_modal_btn.dataset.currentBookId;
});

rate_btn.addEventListener("click", () => {
  fetch("http://localhost:9000/raiting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      book_id,
      score: rete_score,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
