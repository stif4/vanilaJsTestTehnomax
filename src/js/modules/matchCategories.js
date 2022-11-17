const categoriesMath = (arryGoods,arryCategories) => {
  const categoriesMatced = arryCategories.map((category) => {
    const value = arryGoods.reduce((match, good) => {
      if (good.category === category) {
        return (match = match + 1);
      }
      return match;
    }, 0);
    return { name: category, value };
  });

//   if (arryFiltered.length > 0) {
//     setIsloading(true);
//   } else {
//     toast("В магазине нет данного асортимента");
//   }
  return categoriesMatced;
};

export default categoriesMath;