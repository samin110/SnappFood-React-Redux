import {
  ADD_TO_CART,
  DECREMENT_QUANTITY_OF_CART,
  DELETE_FROM_CART,
} from "../actions/actionCart/actionType";

const initialState = {
  orders: [],
};

export const cartReducer = (state = initialState, action) => {
  const { orders } = state;

  switch (action.type) {
    case ADD_TO_CART: {
      const cloneFromOrders = [...orders];

      // Find Order index for update the quantity
      const findIndexOrder = cloneFromOrders.findIndex(
        (order) => order._id === action.payload._id
      );

      if (findIndexOrder < 0) {
        // add quantity key to order object
        action.payload.quantity = 1;

        cloneFromOrders.push(action.payload);

        return {
          ...state,
          orders: cloneFromOrders,
        };
      } else {
        // update Order by plus one quantity and set to the state orders
        const updateOrderItem = cloneFromOrders[findIndexOrder];
        updateOrderItem.quantity++;
        cloneFromOrders[findIndexOrder] = updateOrderItem;

        return {
          ...state,
          orders: cloneFromOrders,
        };
      }
    }

    case DELETE_FROM_CART: {
      const cloneFromOrders = [...orders];
      const filteredOrders = cloneFromOrders.filter((order) => {
        return order._id !== action.payload;
      });

      return { ...state, orders: filteredOrders };
    }

    case DECREMENT_QUANTITY_OF_CART: {
      const cloneFromOrders = [...orders];

      const findIndexOrder = cloneFromOrders.findIndex((order) => {
        return order._id === action.payload._id;
      });

      // decrement quantity of order and set State
      const updateOrderItem = cloneFromOrders[findIndexOrder];
      updateOrderItem.quantity--;
      cloneFromOrders[findIndexOrder] = updateOrderItem;

      return { ...state, orders: cloneFromOrders };
    }

    default:
      return state;
  }
};
