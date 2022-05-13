import ProductCard4 from "components/product-cards/ProductCard4";
import { H3 } from "components/Typography";
import { Box, Grid } from "@mui/material";
import React from "react";
import Link from "next/link";

const RelatedProducts = ({
  productsData
}) => {
  return <Box mb={7.5} sx={{padding: '0 20px'}}>
      <H3 mb={3}>O'xshash mahsulotlar</H3>
      <Grid container spacing={8}>
           {productsData?.map(item => <Grid item lg={2} md={3} sm={4} xs={6} key={item?.product_name}>
              <Link href={`/product/${item?.product_id}`}>
                <a>
                  <ProductCard4 {...item} />
                </a>
              </Link>
            </Grid>)}
      </Grid>
    </Box>;
};

export default RelatedProducts;





