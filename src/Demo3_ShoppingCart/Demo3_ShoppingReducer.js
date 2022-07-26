
const Demo3ShoppingReducer = (state = { products: [] }, action) => {

    switch (action.type) {

        case "ADD":
            let arr = [...state.products];
            let index = arr.findIndex(x => x.name === action.payload.name);
            if (index >= 0) {
                arr[index].price = action.payload.price;
                return { ...state, products: arr };
            } else {
                return { ...state, products: [...state.products, action.payload] };
            }

        case "DELETE":
            let arr2 = [...state.products];
            arr2 = arr2.filter(x => x.name !== action.payload.name);
            return { ...state, products: arr2 };

        default:
            return state;
    }
}
export default Demo3ShoppingReducer;