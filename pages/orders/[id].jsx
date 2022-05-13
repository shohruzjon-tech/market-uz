import FlexBox from 'components/FlexBox';
import Delivery from 'components/icons/Delivery';
import PackageBox from 'components/icons/PackageBox';
import TruckFilled from 'components/icons/TruckFilled';
import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import { H5, H6, Paragraph } from 'components/Typography';
import useWindowSize from 'hooks/useWindowSize';
import Done from '@mui/icons-material/Done';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { Avatar, Button, Card, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box, useTheme } from '@mui/system';
import { format } from 'date-fns';
import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getListOfOrderedProducts } from 'redux-actions/product-redux/product.selectors';
import { getCurrentUserData, getUserAddressList } from '../../src/redux-actions/user-redux/user.selectors';
import { getuserAdressStart } from '../../src/redux-actions/user-redux/user.actions';
import { auth } from 'services/firebase.app';


const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};

const StyledFlexbox = styled(FlexBox)(({
  theme
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '2rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  '& .line': {
    flex: '1 1 0',
    height: 4,
    minWidth: 50,
    [theme.breakpoints.down('sm')]: {
      flex: 'unset',
      height: 50,
      minWidth: 4
    }
  }
}));

const OrderDetails = () => {
  const orderStatus = 'shipping';
  const orderStatusList = ['packaging', 'shipping', 'delivering', 'complete'];
  const stepIconList = [PackageBox, TruckFilled, Delivery];
  const statusIndex = orderStatusList.indexOf(orderStatus);
  const width = useWindowSize();
  const theme = useTheme();
  const breakpoint = 350;
  console.log(theme.breakpoints.up('md'));

  const user_data = useSelector(getCurrentUserData);
  const user_adress = useSelector(getUserAddressList);
  const router = useRouter();
  const dispatch = useDispatch();
  const ordersList = useSelector(getListOfOrderedProducts);
  const order = ordersList?.filter((item)=>item?.order_id===parseInt(router?.query?.id))[0];




  useEffect(()=>{
    dispatch(getuserAdressStart(user_data?.user_id));
 }, [])


 const total_price = order?.ordered_product?.filter(item=>item?.product_id!==order?.ordered_product_id)?.reduce((first,next)=>{
      return first + next.product_price;
 }, 0);

 const main_order = order?.ordered_product?.filter(item=>item?.product_id===order?.ordered_product_id)[0];

 const user = auth?.currentUser?.uid;
 if(!user){
   return <Redirect to='/'/>
 };

  return <DashboardLayout>
      <DashboardPageHeader title="Buyurtma malumotlari" icon={ShoppingBag} button={<Button onClick={()=>router.push('/')} color="primary" sx={{
      bgcolor: 'primary.light',
      px: '2rem'
    }}>
            Yana buyurtma qilish
          </Button>} navigation={<CustomerDashboardNavigation />} />

      <Card sx={{
      p: '2rem 1.5rem',
      mb: '30px'
    }}>
        <StyledFlexbox>
          {stepIconList.map((Icon, ind) => <Fragment key={ind}>
              <Box position="relative">
                <Avatar sx={{
              height: 64,
              width: 64,
              bgcolor: ind <= statusIndex ? 'primary.main' : 'grey.300',
              color: ind <= statusIndex ? 'grey.white' : 'primary.main'
            }}>
                  <Icon color="inherit" sx={{
                fontSize: '32px'
              }} />
                </Avatar>
                {ind < statusIndex && <Box position="absolute" right="0" top="0">
                    <Avatar sx={{
                height: 22,
                width: 22,
                bgcolor: 'grey.200',
                color: 'success.main'
              }}>
                      <Done color="inherit" sx={{
                  fontSize: '1rem'
                }} />
                    </Avatar>
                  </Box>}
              </Box>
              {ind < stepIconList.length - 1 && <Box className="line" bgcolor={ind < statusIndex ? 'primary.main' : 'grey.300'} />}
            </Fragment>)}
        </StyledFlexbox>

        <FlexBox justifyContent={width < breakpoint ? 'center' : 'flex-end'}>
          <Typography p="0.5rem 1rem" borderRadius="300px" bgcolor="primary.light" color="primary.main" textAlign="center">
            Kutilgan yetkazib berish sanasi <b>{order?.estimated_delivery}</b>
          </Typography>
        </FlexBox>
      </Card>

      <Card sx={{
      p: '0px',
      mb: '30px'
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
              Qabul qilingan:
            </Typography>
            <Typography fontSize="14px">
              {order?.order_created_date}
            </Typography>
          </FlexBox>
          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize="14px" color="grey.600" mr={0.5}>
              Jo'natilgan:
            </Typography>
            <Typography fontSize="14px">
              {order?.order_sent_at?.seconds? format(new Date(order?.order_sent_at?.seconds*1000), 'dd MMM, yyyy') : undefined}
            </Typography>
          </FlexBox>
        </TableRow>

        <Box py={1}>
          {order?.ordered_product?.map(item => <FlexBox px={2} py={1} flexWrap="wrap" alignItems="center" key={item.product_id}>
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
                     `${item?.product_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} X ${order?.order_quantity}`
                    :
                    item?.product_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")  
                    }
                  </Typography>
                </Box>
              </FlexBox>
              <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600">
                  Mahsulot sifatlari: Identika
                </Typography>
              </FlexBox>
            </FlexBox>)}
        </Box>
      </Card>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{
          p: '20px 30px'
        }}>
            <H5 mt={0} mb={2}>
              Junatma manzili
            </H5>
            <Paragraph fontSize="14px" my="0px">
              {user_adress[0]?.user_home_number}{' '}
              {user_adress[0]?.user_street}, {' '}
              {user_adress[0]?.user_village},{' '}
              {user_adress[0]?.user_city},{' '}
              {user_adress[0]?.user_region}
            </Paragraph>
          </Card>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{
          p: '20px 30px'
        }}>
            <H5 mt={0} mb={2}>
              Yakuniy hisob kitob
            </H5>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Mahsulot uchun:
              </Typography>
              <H6 my="0px">{(total_price+(main_order?.product_price*order?.order_quantity))?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm</H6>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Eltuv xizmati:
              </Typography>
              <H6 my="0px">Tekin</H6>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Chegirma:
              </Typography>
              <H6 my="0px">{main_order?.product_discounted_price} so'm</H6>
            </FlexBox>

            <Divider sx={{
            mb: '0.5rem'
          }} />

            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <H6 my="0px">Jami tulanadi</H6>
              <H6 my="0px">{((total_price+(main_order?.product_price*order?.order_quantity))-main_order?.product_discounted_price)?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  so'm</H6>
            </FlexBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>;
};

export default OrderDetails;



