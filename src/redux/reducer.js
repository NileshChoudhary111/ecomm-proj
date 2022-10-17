import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.warn('reducer called', action);

            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.warn('reducer REMOVE_FROM_CART', action);
            //data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item) => item.id !== action.data);

            return [...remainingItem ];
        
        case EMPTY_CART:
            console.warn('reducer EMPTY_CART', action);
            data = [];
            return [...data ];    
        default:
            return data;
    }
};