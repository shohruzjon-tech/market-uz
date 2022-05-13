import React, { useEffect, useState } from 'react';
import FlexBox from 'components/FlexBox';
import { Button, Grid, styled, Divider, Avatar, Card } from '@mui/material';
import { Box } from '@mui/system';
import BazarCard from 'components/BazarCard';
import { H1, Paragraph, H5, H6 } from 'components/Typography';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import NavbarLayout from "components/layout/NavbarLayout";
import { db } from '../../src/services/firebase.app';
import { onSnapshot, doc } from "firebase/firestore";
import TableRow from 'components/TableRow';
import LazyImage from 'components/LazyImage';
import { format } from 'date-fns';


const Wrapper = styled(BazarCard)(() => ({
  textAlign: 'center',
  width: '930px',
  padding: '3rem'
}));

const SuccessfulOrderPage = () => {
  const router = useRouter();
  const [order, setOrder] = useState(undefined);
  
  useEffect(()=>{
    if(!router?.query?.id){
      return;
    }
    const unsubscribe = onSnapshot(
    doc(db, 'uzstore_pending_orders', router?.query?.id), 
    (doc) => {
        const data=doc.data();
        setOrder(data);
        if(!doc){
          router.push('/404')
        }
    });
     return ()=>{
     unsubscribe();
   }
  }, [router.isReady]);
  const productD = order?.ordered_product?.filter(item=>item?.product_id===order?.ordered_product_id)[0];
  const total_price = order?.ordered_product?.filter(item=>item?.product_id!==order?.ordered_product_id)?.reduce((a,b)=>{
    return a+b?.product_price
  }, 0);

  console.log(order);
  console.log(productD);


  return (
    <NavbarLayout mar>
      <Grid container justifyContent="center" mb="10rem" >
        <Wrapper>
          <LazyImage src="/assets/images/illustrations/party-popper.svg" width={116} height={116} />
          <H1 lineHeight={1.1} mt="1.5rem">
            Buyurtmangiz qabul qilindi!
          </H1>
          <Paragraph color="grey.800" mt="1rem" mb={7}>
            To'liq malumot uchun operator tez orada kiritgan raqamingizga qo'ng'iroq qilib bog'lanadi. Iltimos 
            jarayonni bekor bulishini oldini olish uchun telefoningiz ishlayotgan holatda bulsin.
          </Paragraph>
        <Card sx={{
      p: '0px',
      mb: '30px',
      boxShadow: 'none',
      mt: '15px',
    }}>
        <TableRow sx={{
        bgcolor: 'grey.200',
        p: '12px',
        boxShadow: 'none',
        borderRadius: 0
      }}>
          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize="14px" color="grey.600" mr={0.5}>
              Buyurtma raqami:
            </Typography>
            <Typography fontSize="14px">{order?.order_id}</Typography>
          </FlexBox>
          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize="14px" color="grey.600" mr={0.5}>
              Qabul qilindi:
            </Typography>
            <Typography fontSize="14px">
              {format(new Date(), 'dd/MM, yyyy')}
            </Typography>
          </FlexBox>
        </TableRow>

        <Box py={1}>
          {
            order?.ordered_product?.map(item=>
              <FlexBox px={2} py={1} flexWrap="wrap" alignItems="center" key={item?.product_id}>
              <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                <Avatar src={item?.product_media[0]?.media_link} sx={{
              height: 64,
              width: 64
            }} />
                <Box ml={2.5}>
                  <H6 my="0px">{item?.product_name}</H6>
                  <Typography fontSize="14px" color="grey.600">
                    {
                      item?.product_id===order?.ordered_product_id?
                     `${item?.product_price} so'm  x ${order?.order_quantity}`:
                     item?.product_price
                    }
                  </Typography>
                </Box>
              </FlexBox>
            </FlexBox>
              )
          }
        </Box>
      </Card>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{
          p: '20px 30px',
          boxShadow: 'none',
        }}>
            <H5 mt={0} mb={2}>
              Jami to'lanadi
            </H5>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
              Mahsulot uchun:
              </Typography>
              <H6 my="0px">{(total_price+(productD?.product_price*order?.order_quantity))?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm</H6>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Yetqzib berish:
              </Typography>
              <H6 my="0px">Tekin</H6>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                chegirma:
              </Typography>
              <H6 my="0px">0 so'm</H6>
            </FlexBox>

            <Divider sx={{
            mb: '0.5rem'
          }} />

            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <H6 my="0px">To'lanadi</H6>
              <H6 my="0px">{productD?.product_price*order?.order_quantity?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   so'm</H6>
            </FlexBox>
          </Card>
        </Grid>
        </Grid>
      </Wrapper>
      </Grid>
     </NavbarLayout>
  );
};

export default SuccessfulOrderPage;