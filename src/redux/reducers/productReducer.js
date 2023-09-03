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

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, products: payload.data };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;