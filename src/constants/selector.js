import {
  FILTER_PRODUCT
} from './productConstants';


export const getProductsState = store => store.productList;
export const getProductList = store => (getProductsState(store) || null);

export const getProductByParam = (store, filter, title, description) => {
  const allProducts = getProductList(store);
  const resultTitle = title === "" ? allProducts : allProducts.products.filter(product => product.title.toUpperCase().includes(title.toUpperCase()));
  const resultDesription = description === "" ? resultTitle : resultTitle.filter(product => product.description.toUpperCase().includes(description.toUpperCase()));

  switch (filter) {
    case ALL_PRODUCT:
      return allProducts;
    default:
      return {
        ...allProducts,
        products: resultDesription,
      };
  }
};