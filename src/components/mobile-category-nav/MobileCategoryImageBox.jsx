import FlexBox from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import { Typography } from '@mui/material';
import React from 'react';

const MobileCategoryImageBox = ({ product }) => {
  return <FlexBox sx={{background:'#fff'}} flexDirection="column" alignItems="center" justifyContent="center" height='100px'>
      {product?.product_media ? <LazyImage src={product?.product_media[0]?.media_link} borderRadius="5px" alt={product?.product_name} width={100} height={100} objectFit="cover" /> : Icon && <Icon size="48px">''</Icon>}
      <Typography className="ellipsis" textAlign="center" fontSize="11px" lineHeight="1" mt={1} ellipsis py={3}>
        {product?.product_name}
      </Typography>
    </FlexBox>;
};

export default MobileCategoryImageBox;