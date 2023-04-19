const carouselItemNode = document.querySelectorAll(".carousel_box--item");

const carouselItems = [...carouselItemNode];

const getter = (tag, childClass) => {
  return tag.querySelector(childClass);
};

carouselItems.map(item => {
  item.addEventListener("click", () => {
    let [answer, icon] = [
      getter(item, ".item_answer"),
      getter(item, ".item_icon--image"),
    ];
    if (item.classList.contains("border")) {
      carouselItems.forEach((e) => {
        [answer, icon] = [
          getter(e, ".item_answer"),
          getter(e, ".item_icon--image"),
        ];
        e.classList.remove("border");
        answer.style.height = "0";
        icon.src = "../assets/images/faq/plus.svg";
      });
    } else {
      item.classList.add("border");
      answer.style.height = answer.scrollHeight + "px";
      icon.src = "../assets/images/faq/minus.svg";
    }
  });
});
