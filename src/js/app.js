// TODO: write your code here

export default function orderByProps(obj, order = []) {
  const copyObj = obj;
  const sortArray = [];
  const tempArray = [];
  let orderArray = [];

  if (order.length !== 0) {
    order.forEach((element) => {
      const item = {};

      item.key = element;
      item.value = copyObj[element];
      sortArray.push(item);
      delete copyObj[element];
    });
  }


  for (const prop in copyObj) {
    if (Object.hasOwnProperty.call(copyObj, prop)) {
      const el = {};
      el.key = prop;
      el.value = copyObj[prop];
      tempArray.push(el);
    }
  }

  tempArray.sort((a, b) => (a.key > b.key ? 1 : -1));

  orderArray = [...sortArray, ...tempArray];
  return orderArray;
}
