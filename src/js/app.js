// TODO: write your code here

export default function orderByProps(obj, order = []) {
  const sortArray = [];
  const tempArray = [];
  let orderArray = [];

  if (order.length !== 0) {
    order.forEach((element) => {
      const item = {};

      item.key = element,
      item.value = obj[element];
      sortArray.push(item);
      delete obj[element];
    });
  }


  for (const prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop)) {
      const el = {};
      el.key = prop;
      el.value = obj[prop];
      tempArray.push(el);
    }
  }

  tempArray.sort((a, b) => (a.key > b.key ? 1 : -1));

  orderArray = [...sortArray, ...tempArray];
  return orderArray;
}
