import FlexBox from 'components/FlexBox';
import ProductCard1 from 'components/product-cards/ProductCard1';
import { Span } from 'components/Typography';
import { Grid, Pagination } from '@mui/material';
import React from 'react';

const ProductCard1List = ({ products }) => {
  return <div>
      <Grid container spacing={3}>
        {products?.map((item, ind) => <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard1 product={item} />
          </Grid>)}
      </Grid>
    </div>;
};

export default ProductCard1List;