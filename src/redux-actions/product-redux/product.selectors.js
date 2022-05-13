export const selectSingleLoading = (state) =>{
    return state.products.isSingleLoading;
};

export const selectSingleProduct = (state) =>{
    return state.products.singleProduct;
};

export const getListOfTopRatedProducts = (state) =>{
    return state.products.topProductsList;
};

export const getListOfNewProducts = (state) =>{
    return state.products.new_products_list;
};

export const getListOfDiscountedProductsList = (state) =>{
    return state.products.discounted_products_list;
};

export const getListOfCategories = (state) =>{
    return state.products.product_categories;
};

export const getListOfOrderedProducts = (state) =>{
    return state.products.orders_list
};