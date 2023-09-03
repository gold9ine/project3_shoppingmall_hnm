import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  // productList: [],
  products: [],
  selectedItem: null,
};

// function reducer(state = initialState, action) {
//   let { type, payload } = action;

//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, products: payload.data };
//     default:
//       return { ...state };
//   }
//   return { ...state };
// }
// export default reducer;

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, products: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }
// export default productReducer;

// 신버전 : reducer toolkit 사용
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.products = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.products = action.payload.data;
    },
  },
});
console.log('productSlice: ' , productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;