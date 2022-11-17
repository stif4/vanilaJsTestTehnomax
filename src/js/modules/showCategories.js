const showCategories = (array) => {
  const placePut = document.querySelector(".sidebar__categories");
  array.forEach((c) => {
    placePut.insertAdjacentHTML(
      "beforeend",
      `
        <a class="sidebar__category category">
            <div class="category__container">
                <div class="category__text">${c.name}</div>
                <div class="category__number">${c.value}</div>
             </div>
        </a>
      `
    );
  });
  const hideNull = document.querySelectorAll(".category__number");
  hideNull.forEach((e) => {
    console.log(e.textContent)
    if (e.textContent === '0') {
      e.classList.add("category__number_none");
    }
  });
};
export default showCategories;
