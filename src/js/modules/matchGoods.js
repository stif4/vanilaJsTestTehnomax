const RegExpFilter = (selectedGoodKey, word) => {
  const reg = new RegExp("(^| )" + word.toLowerCase() + "( |$)", "g");
  if (reg.test(selectedGoodKey.toLowerCase())) {
    return true;
  }
};

const fillObject = (check, objMathc, obj, typeHeck) => {
  if (check) {
    if (!objMathc.id) {
      objMathc.id = obj.id;
      objMathc.title = obj.title;
      objMathc.category = obj.category;
      objMathc.image = obj.image;
      objMathc.price = obj.price;
      if (typeHeck === "title") {
        objMathc.mathTitle = 1;
        objMathc.mathCategory = 0;
      } else {
        objMathc.mathTitle = 0;
        objMathc.mathCategory = 1;
      }
    } else {
      typeHeck === "title"
        ? (objMathc.mathTitle += 1)
        : (objMathc.mathCategory += 1);
    }
  }
  return objMathc;
};

const matchGoods = (goods, dataSeartch ) => {
  const arryPush = [];
  const arryPop = [];
  for (const obj of goods) {
    let objMathc = {};
    for (const word of dataSeartch) {
      const checkTitle = RegExpFilter(obj.title, word);
      const checkCategory = RegExpFilter(obj.category, word);

      objMathc = { ...fillObject(checkTitle, objMathc, obj, "title") };
      objMathc = { ...fillObject(checkCategory, objMathc, obj, "category") };
    }

    if (Object.keys(objMathc).length) {
      if (objMathc.mathCategory !== 0 && objMathc.mathTitle !== 0) {
        arryPush.push(objMathc);
      } else {
        arryPop.push(objMathc);
      }
    }
  }
  return [...arryPop, ...arryPush];
};

export default matchGoods;
