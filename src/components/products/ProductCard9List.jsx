import FlexBox from 'components/FlexBox';
import ProductCard9 from 'components/product-cards/ProductCard9';
import { Pagination } from '@mui/material';
import React from 'react';
import { Span } from '../Typography';

const ProductCard9List = ({products}) => {
  console.log(products);
  return <div>
      {products.map((item, ind) => <ProductCard9 key={ind} {...item} />)}
    </div>;
};

export default ProductCard9List;