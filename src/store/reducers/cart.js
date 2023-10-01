const initState = {
    items: []
};

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const handleAddCart = () => ({
    type: 'ADD_PRODUCT',
    name: 'a',
})

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                items: [...state.items, action.name]
            };
        default:
            return state;
    }
};

export default reducer;