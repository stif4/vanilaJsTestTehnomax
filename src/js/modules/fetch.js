const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      method: "get",
    });
    const data= await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export default fetchData;
