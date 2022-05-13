import { Box, Grid } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { H1, H2, H6 } from "components/Typography";
import React   from "react";
import FlexBox from "../FlexBox";
import OrderFormComponent from '../Order-form/order-form';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import BazarRating from "components/BazarRating";
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';


const ProductIntro = ({
  product
}) => {
  const router= useRouter();
  return <Box width="100%" sx={{backgroundColor: 'white', padding: '0 20px 20px 20px'}}>
      <Grid container spacing={4} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box sx={{height: 'max-content'}}>
               <Carousel style={{width: '450px'}}>
                  {product?.product_media?.map((item, index)=>{
                    return item?.type_id===1? <img key={index} src={item.media_link} alt={product?.product_name}  width='100%' loading="eager" objectFit="contain" className='product_media_query'/>:
                    <video key={index} src={item.media_link} autoplay={true} width='100%' controls className='product_media_query'></video>
                  })}
              </Carousel>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center" >
          <H1 mb={2}>{product?.product_name}</H1>
          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {product?.product_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm
            </H2>
          </Box>
          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Baholangan:</Box>
            <Box mx={1} lineHeight="1">
              <BazarRating color="warn" fontSize="1.25rem" value={parseInt(product?.product_rating)} readOnly />
            </Box>
            <H6 lineHeight="1">({product?.product_reviewed_by})</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb={2}>
            <H6 mt={1} mb={1} lineHeight="1.5">
                Buyurtma qilish uchun formani to'ldiring
            </H6>
          </FlexBox>
          <FlexBox alignItems="center" mb={2}>
            <OrderFormComponent 
              product={product}
            />
          </FlexBox>
         </Grid>
      </Grid>
    </Box>;
};

export default ProductIntro;