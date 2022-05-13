import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavbarLayout from "components/layout/NavbarLayout";
import ProductDescription from "components/products/ProductDescription";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import RelatedProducts from "components/products/RelatedProducts";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProductStart } from 'redux-actions/product-redux/product.actions';
import { selectSingleLoading, selectSingleProduct } from 'redux-actions/product-redux/product.selectors';
import ReactHtmlParser from 'react-html-parser';
import Error404 from '../404';
import Head from 'next/head';
import SplashScreen from '../../src/components/splash-screen';
import { getProductsWithCategoryId  } from '../../src/services/firebase.utils';
const StyledTabs = styled(Tabs)(({
  theme
}) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  padding: '0 10px',
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    fontWeight: 600,
    minHeight: 40,
    textTransform: "capitalize"
  }
}));

const ProductDetails = () => {
  const router = useRouter();
  const [similarProducts, setSimilarList]=useState([]);
  const {
    id
  } = router.query;
  const [selectedOption, setSelectedOption] = useState(0);
  const dispatch = useDispatch();
  const isSingleLoading = useSelector(selectSingleLoading);
  const product = useSelector(selectSingleProduct);
  useEffect(()=>{
    dispatch(getSingleProductStart(id));
    if(product?.product_category_id){
      getProductsWithCategoryId(product?.product_category_id).then((res)=>{
        setSimilarList(res)
      });
    }
  }, [id])

  const handleOptionClick = (_event, newValue) => {
    setSelectedOption(newValue);
  };

  if(!isSingleLoading&&!product?.product_id){
    return <Error404 />;
  };

  return isSingleLoading||!product?.product_id? <SplashScreen /> : <NavbarLayout pad>
    <Head>
    <title>{product?.product_name}</title>
    <meta name="description" content={ReactHtmlParser(product?.product_description)}/>
    <link rel="canonical" href={`https://uzstore.uz/product/${product?.product_id}`}/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:title" content={product?.product_name} />
    <meta property="og:url" content={`https://uzstore.uz/product/${product?.product_id}`} />
    <meta property="og:site_name" content="uzstore.uz" />
    <meta property="og:description" content={product?.product_description} />
    <meta property="og:image" content={`${product?.product_media[0]?.media_link}`} />
    </Head>
       <ProductIntro product={product} />
      <StyledTabs value={selectedOption} onChange={handleOptionClick} indicatorColor="primary" textColor="primary">
        <Tab className="inner-tab" label="To'liq malumot" />
        <Tab className="inner-tab" label="Xaridorlar izohlari" />
      </StyledTabs>
      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription description={product?.product_description}/>}
        {selectedOption === 1 && <ProductReview productId={product?.product_id}/>}
      </Box>
     <RelatedProducts productsData={similarProducts} />
    </NavbarLayout>
};


export default ProductDetails;