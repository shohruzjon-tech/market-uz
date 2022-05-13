import React from 'react';
import { Container, Grid } from '@mui/material';
import CategorySectionHeader from '../CategorySectionHeader';
import ProductCard4 from '../product-cards/ProductCard4';
import Link from "next/link";

const Section11 = ({
  moreItems
}) => {
  return <Container sx={{
    mb: '70px'
  }}>
      <CategorySectionHeader title="Yanada ko'proq" seeMoreLink="/category/all-products" />
      <Grid container spacing={3}>
          {moreItems.map(item => <Grid item lg={2} md={3} sm={4} xs={6} key={item.product_name}>
              <Link href={`/product/${item?.product_id}`}>
                <a>
                  <ProductCard4 {...item} />
                </a>
              </Link>
            </Grid>)}
      </Grid>
    </Container>;
};

export default Section11;