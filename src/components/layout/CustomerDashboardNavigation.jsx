import FlexBox from 'components/FlexBox';
import CustomerService from 'components/icons/CustomerService';
import CreditCard from '@mui/icons-material/CreditCard';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Person from '@mui/icons-material/Person';
import Place from '@mui/icons-material/Place';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { DashboardNavigationWrapper, StyledDashboardNav } from './DashboardStyle';
import { getLengthOfAdressList } from 'redux-actions/user-redux/user.selectors';
import { useSelector } from 'react-redux';
import Logout from '@mui/icons-material/Logout';
import { auth } from 'services/firebase.app';
import { signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { userAuthSucces } from 'redux-actions/user-redux/user.actions';
import { useDispatch } from 'react-redux';


const CustomerDashboardNavigation = () => {
  const adressCount = useSelector(getLengthOfAdressList);
  const {
    pathname
  } = useRouter();
  const router = useRouter();
  const linkList = [{
    title: `ASOSIY BO'LIM`,
    list: [{
      href: '/orders',
      title: 'Buyurtmalar',
      icon: ShoppingBagOutlined,
    }]
  }, {
    title: 'PROFIL SOZLAMALARI',
    list: [{
      href: '/profile',
      title: 'Profil malumotlari',
      icon: Person,
    }, {
      href: '/address',
      title: 'Manzillar ruyhati',
      icon: Place,
      count: adressCount,
    }, {
      href: '/payment-methods',
      title: `To'lov ususllari`,
      icon: CreditCard,
    }, {
      out: true,
      href: '#',
      title: `Profildan chiqish`,
      icon: Logout,
    }]
  }];
  const dispatch = useDispatch();

  const signOutFromAuth = async ()=>{
    try {
      await signOut(auth);
      router.push('/');
      toast.success('Tizimdan chiqarildingiz');
      dispatch(userAuthSucces(undefined));
    } catch (error) {
      toast.error('Tizimdan chiqishda hatolik yuz berdi');
      console.log(error);
    }
};

  return <DashboardNavigationWrapper sx={{
    px: '0px',
    pb: '1.5rem',
    color: 'grey.900'
  }}>
      {linkList.map(item => <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
            {item.title}
          </Typography>
          {item.list.map(item => <StyledDashboardNav isCurrentPath={pathname.includes(item.href)} href={item.href} key={item.title} onClick={()=>{
            if(item?.out){
              signOutFromAuth();
            }
          }}>
              <FlexBox alignItems="center">
                <item.icon className="nav-icon" fontSize="small" color="inherit" sx={{
            mr: '10px'
          }} />

                <span>{item.title}</span>
              </FlexBox>
              <span>{item?.count}</span>
            </StyledDashboardNav>)}
        </Fragment>)}
    </DashboardNavigationWrapper>;
};

export default CustomerDashboardNavigation;