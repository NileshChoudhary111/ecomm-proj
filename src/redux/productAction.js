import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productList = () => {
    return {
        type: PRODUCT_LIST,
        // data:'apple'
    };
}

/* export const setProductList = (data) => {
    console.warn("Set Action", data);
    return {
        type: SET_PRODUCT_LIST,
        data
    };
} */