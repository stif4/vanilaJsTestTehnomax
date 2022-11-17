import fetchData from "./modules/fetch";
import seartchAction from "./modules/seartchAction";

window.addEventListener("DOMContentLoaded", async () => {
  "use strict";

  const hideElement = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    element.style.display = "none";
  };
  hideElement(".widget__main");

  const url = "https://fakestoreapi.com/products/";
  const arryGoods = await fetchData(url);
  const arryCategories = await fetchData(url + "categories");
  console.log(arryGoods);
  console.log(arryCategories);
  seartchAction(arryGoods, arryCategories);
});
