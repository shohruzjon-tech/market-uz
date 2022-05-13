import React from 'react';
import { Container, Grid } from '@mui/material';
import CategorySectionHeader from '../CategorySectionHeader';
import ProductCard18 from '../product-cards/ProductCard18';

const Section14 = ({
  moreItems
}) => {
  return <Container sx={{
    mb: '70px'
  }}>
      <CategorySectionHeader title="Yanada ko'proq" seeMoreLink="/category/all-products" />
      <Grid container spacing={3}>
        {moreItems?.map((item, ind) => <Grid item lg={2} md={4} sm={6} xs={6} key={ind}>
            <ProductCard8 off={25} hoverEffect {...item} />
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section18;