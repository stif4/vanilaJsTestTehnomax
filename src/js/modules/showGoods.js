const showGoods = (array) => {
  const placePut = document.querySelector(".product__row");
  array.forEach((g) => {
    placePut.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product__column">
      <div class="product__item item">
        <div class="item__row" id="${g.id}">
          <div class="item__img _ibg">
            <img
              src="${g.image}"
              alt=""
            />
          </div>
          <div class="item__body">
            <p class="item__name">${g.title}</p>
            <div class="item__price">${g.price}</div>
          </div>
        </div>
      </div>
    </div>
    `
    );
  });
};
export default showGoods;
