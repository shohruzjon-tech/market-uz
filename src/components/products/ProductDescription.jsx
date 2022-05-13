import { Box } from '@mui/material';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ProductDescription = ({ description }) => {
  return<Box sx={{padding: '0 20px'}}>
           <div className="product-description-container">
             {ReactHtmlParser(description)}
           </div>
       </Box>
};

export default ProductDescription;