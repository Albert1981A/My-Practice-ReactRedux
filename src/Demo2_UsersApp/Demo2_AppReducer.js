const appReducer = (state = { users: [] }, action) => {

    // debugger;
    switch (action.type) {

        case "LOAD_DATA":
            return { ...state, users: action.payload };

        case "ADD":
            return { ...state, users: [...state.users, action.payload] };

        case "UPDATE":
            let arr = [...state.users];
            const index = arr.findIndex(x => x.id === action.payload.id);
            if (index >= 0) {
                arr[index] = action.payload;
            }
            return { ...state, users: arr };

        case "DELETE":
            let arr2 = state.users;
            arr2 = arr2.filter(x => x.id !== action.payload);
            return { ...state, users: arr2 };

        default:
            return state;
    }

}
export default appReducer;