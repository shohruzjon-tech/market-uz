import FlexBox from 'components/FlexBox';
import NavbarLayout from 'components/layout/NavbarLayout';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { getListOfTotalProducts }from 'services/firebase.utils';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import BazarRating from 'components/BazarRating';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4, Small } from 'components/Typography';

const ProductSearchResult = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();


  useEffect(()=>{
    setLoading(true);
    getListOfTotalProducts().then((res)=>{
      setProducts(res);
      setLoading(false)
    })
  }, []);


  return <NavbarLayout>
      <Box pt={2.5}>
        <Grid container spacing={3}>
        {products?.map(item=>
         <Grid item lg={1} md={3} xs={4} key={item?.product_id}>
           <Box onClick={()=>router.push(`/product/${item?.product_id}`)}>
              <HoverBox mb={2} mx="auto" borderRadius="8px">
                <LazyImage src={item?.product_media[0]?.media_link} width='100%' height={90} layout="responsive" alt={item?.product_name} mx="auto" />
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
         </Grid>)}
        </Grid>
      </Box>
    </NavbarLayout>;
};

export default ProductSearchResult;