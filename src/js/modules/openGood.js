const openGood = () => {
  const goods = document.querySelectorAll(".item__row");

  goods.forEach((g) => {
    g.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target &&
        (target.classList.contains("item__row") ||
          target.parentNode.parentNode.classList.contains("item__row"))
      ) {
        document.location.href = `http://localhost:4000/product/${g.getAttribute(
          "id"
        )}`;
      }
    });
  });
};
export default openGood;
