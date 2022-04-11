// Convert price to number and claculate invoice
export const totalAmountForInvoice = (orders) => {
  return orders.reduce((previousValue, currentValue) => {
    const convertToNumber = currentValue.price.split(" ");
    return previousValue + currentValue.quantity * convertToNumber[0];
  }, 0);
};
