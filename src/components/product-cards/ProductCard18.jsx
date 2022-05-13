import BazarRating from 'components/BazarRating';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4, Small } from 'components/Typography';
import { Box } from '@mui/material';
import React from 'react';
import FlexBox from '../FlexBox';

const ProductCard18 = ({
  product_price,
  product_media,
  product_name,
  product_rating,
  product_reviewed_by,
}) => {
  return <Box >
      <HoverBox mb={2} mx="auto" borderRadius="8px">
        <LazyImage src={product_media[0]?.media_link} width='100%' height={170} layout="responsive" alt={product_name} mx="auto" />
      </HoverBox>
      <FlexBox justifyContent="center" alignItems="center" mb={0.5} >
        <BazarRating value={product_rating} color="warn" readOnly />
        <Small fontWeight="600" pl={0.5}>
          ({product_reviewed_by})
        </Small>
      </FlexBox>

      <H4 fontWeight="600" fontSize="14px" textAlign="center" mb={0.5} title={product_name} ellipsis>
        {product_name}
      </H4>
      <H4 fontWeight="600" fontSize="14px" textAlign="center" color="primary.main">
        {product_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm
      </H4>
    </Box>;
};

export default ProductCard18;