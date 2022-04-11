export const sumOfQuantity = (orders) => {
  return orders.reduce(
    (previoysValue, currentValue) => previoysValue + currentValue.quantity,
    0
  );
};
