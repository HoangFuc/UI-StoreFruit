const initState = {
    items: []
};

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                items: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;