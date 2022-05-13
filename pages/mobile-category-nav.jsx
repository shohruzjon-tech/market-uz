import Header from 'components/header/Header';
import MobileCategoryNavStyle from 'components/mobile-category-nav/MobileCategoryNavStyle';
import MobileNavigationBar from 'components/mobile-navigation/MobileNavigationBar';
import { Box, Grid, Typography } from '@mui/material';

import BazarRating from 'components/BazarRating';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4, Small } from 'components/Typography';


import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getProductsWithCategoryId }from 'services/firebase.utils';
import FlexBox from 'components/FlexBox';
import { 
  getCategoryListStart,
} from 'redux-actions/product-redux/product.actions';
import { 
  getListOfCategories,
} from 'redux-actions/product-redux/product.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const MobileCategoryNav = () => {
  const [category, setCategory] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCategoryClick = cat_id => () => {
    setCategory(cat_id);
    setLoading(true);
  };

  useEffect(() => {
    dispatch(getCategoryListStart());
  }, []);
  useEffect(()=>{
        setLoading(true);
        getProductsWithCategoryId(parseInt(category)).then((res)=>{
            setProducts(res);
            setLoading(false);
          })
  }, [category]);
  const categoriesList = useSelector(getListOfCategories);
  return <MobileCategoryNavStyle>
      <Header className="header" />
      <div className="main-category-holder">
        {categoriesList?.sort((a, b)=>a.category_id-b.category_id)?.map(item => <Box className="main-category-box" borderLeft={`${category === item?.category_id ? '3' : '0'}px solid`} onClick={handleCategoryClick(item?.category_id)} key={item?.category_id}>
            <Avatar src={item?.category_thumb}  />
            <Typography className="ellipsis" textAlign="center" fontSize="10px" lineHeight="1" >
              {item?.category_name}
            </Typography>
          </Box>)}
      </div>
      <Box className="container" width='70%'>
        {isLoading? <FlexBox justifyContent="center" alignItems="center" height="100%" py={3}><CircularProgress color="error" /></FlexBox>: undefined}
          <Grid container spacing={3}>
            {products?.length===0? <Typography width="100%" textAlign='center' px={4} mt={5}>Bu kategoriyada hozirda mahsulot mavjud emas!</Typography> : undefined}
            {products?.map((item) => <Grid item lg={1} md={2} sm={3} xs={6} key={item?.product_id} >
                <Link href={`/product/${item?.product_id}`}>
                  <a>
                     <Box >
                      <HoverBox mb={2} mx="auto" borderRadius="8px">
                        <LazyImage src={item?.product_media[0]?.media_link} width='100%' height={120} layout="responsive" alt={item?.product_name} mx="auto" />
                      </HoverBox>
                      <FlexBox justifyContent="center" alignItems="center" mb={0.5} >
                        <BazarRating value={item?.product_rating} color="warn" readOnly />
                        <Small fontWeight="600" pl={0.5}>
                          ({item?.product_reviewed_by})
                        </Small>
                      </FlexBox>

                      <H4 fontWeight="600" fontSize="14px" textAlign="center" mb={0.5} title={item?.product_name} ellipsis>
                        {item?.product_name}
                      </H4>
                      <H4 fontWeight="600" fontSize="14px" textAlign="center" color="primary.main">
                        {item?.product_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm
                      </H4>
                    </Box>
                  </a>
                </Link>
              </Grid>)}
          </Grid>
      </Box>
      <MobileNavigationBar />
    </MobileCategoryNavStyle>;
};

export default MobileCategoryNav;