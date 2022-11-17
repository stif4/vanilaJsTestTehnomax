import matchGoods from "./matchGoods";
import { quickSort } from "../services/quickSort";
import categoriesMath from "./matchCategories";
import showGoods from "./showGoods";
import showCategories from "./showCategories";
import toastr from "toastr";
import openGood from "./openGood";

const seartchAction = (arryGoods, arryCategories) => {
  let seartch = "";

  const strTransform = (data) => {
    if (data.replace(/ /g, "").length) {
      const dataTrimed = data.trimEnd().trimStart();
      const dataSplited = dataTrimed.split(" ");
      return dataSplited;
    }
  };

  const pipeArray = (arryGoods) => {
    const arryMathed = matchGoods(arryGoods, seartch);
    return quickSort(
      arryMathed,
      0,
      arryMathed.length - 1,
      "mathTitle"
    ).reverse();
  };

  const showElement = (elementSelector, display) => {
    const element = document.querySelector(elementSelector);
    element.style.display = display;
  };

  const clearMainWidget = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    element.textContent = "";
  };

  function bindAction(searthcDataSelector, buttonSeartchSelector) {
    const searthcData = document.querySelector(searthcDataSelector);
    const buttonSeartch = document.querySelector(buttonSeartchSelector);
    const nameButtonSeartchClass = buttonSeartchSelector.replace(/\./, "");

    buttonSeartch.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target &&
        (target.classList.contains(nameButtonSeartchClass) ||
          target.parentNode.classList.contains(nameButtonSeartchClass))
      ) {
        seartch = strTransform(searthcData.value);
        const sortedAndFilteredGoodsArry = pipeArray(arryGoods);

        if (sortedAndFilteredGoodsArry.length) {
          const categoriesMatched = categoriesMath(
            sortedAndFilteredGoodsArry,
            arryCategories
          );

          clearMainWidget(".product__row");
          clearMainWidget(".sidebar__categories");
          showGoods(sortedAndFilteredGoodsArry);
          showCategories(categoriesMatched);
          showElement(".widget__main", "flex");
          openGood()
        }
        else{
          toastr.error("Данный ассортимент не найден!")
        }
      }
    });
  }
  bindAction(".search__input", ".search__button");
};

export default seartchAction;
