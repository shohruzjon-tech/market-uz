import React, { useEffect, useState } from "react";
import { 
  getTopProductsStart, 
  getNewProductsListStart,
  getDiscountedProductsListStart,
  getCategoryListStart,
} from 'redux-actions/product-redux/product.actions';
import { 
  getListOfNewProducts,
  getListOfTopRatedProducts,
  getListOfDiscountedProductsList,
  getListOfCategories,
} from '../src/redux-actions/product-redux/product.selectors';
import { getLimitedProductsList } from 'services/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import Section10 from "components/superstore-shop/Section10";
import Section11 from "components/superstore-shop/Section11";
import Section12 from "components/superstore-shop/Section12";
import Section13 from "components/superstore-shop/Section13";
import Section4 from "components/superstore-shop/Section4";
import Section5 from "components/superstore-shop/Section5";
import Section8 from "components/superstore-shop/Section8";
import GrocerySection1 from "components/grocery1/GrocerySection1";
import AppLayout from "components/layout/AppLayout";
import { getServiceList } from "utils/api/superstore-shop/sections";

const IndexPage = props => {
  const {
    serviceList
  } = props;
  const dispatch = useDispatch();
  const [moreItems, setMore] = useState([]);
  useEffect(()=>{
      dispatch(getTopProductsStart());
      dispatch(getNewProductsListStart());
      dispatch(getDiscountedProductsListStart());
      dispatch(getCategoryListStart());
      getLimitedProductsList().then((list)=>{
        setMore(list);
      });
  }, [])
  const productsList = useSelector(getListOfTopRatedProducts);
  const newProductsList = useSelector(getListOfNewProducts);
  const discountedProductsList = useSelector(getListOfDiscountedProductsList);
  const categoriesList = useSelector(getListOfCategories);

  return <AppLayout>
     <GrocerySection1/>
     <Section10 categories={categoriesList} />
     <Section4 topRatedList={productsList?.slice(0,6)}/>
     <Section5 newArrivalsList={newProductsList?.slice(0,6)} />
     <Section13 bigDiscountList={discountedProductsList} />
      <Section11 moreItems={moreItems} />
      <Section12 serviceList={serviceList} /> 
    </AppLayout>;
};

export async function getStaticProps() {
  const serviceList = await getServiceList();
  return {
    props: {
      serviceList
    }
  };
}
export default IndexPage;