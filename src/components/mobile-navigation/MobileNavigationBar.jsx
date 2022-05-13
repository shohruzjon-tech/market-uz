import CategoryOutlined from 'components/icons/CategoryOutline';
import Home from 'components/icons/Home';
import User2 from 'components/icons/User2';
import NavLink from 'components/nav-link/NavLink';
import { useAppContext } from 'contexts/app/AppContext';
import useWindowSize from 'hooks/useWindowSize';
import { Box, styled } from '@mui/material';
import { layoutConstant } from 'utils/constants';
import React, { useState } from 'react'; // styled components
import { Dialog, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Login from 'components/sessions/Login';
import { auth } from 'services/firebase.app';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';


const Wrapper = styled(Box)(({
  theme
}) => ({
  display: 'none',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: layoutConstant.mobileNavHeight,
  justifyContent: 'space-around',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 1px 4px 3px rgba(0, 0, 0, 0.1)',
  zIndex: 999,
  '@media only screen and (max-width: 900px)': {
    display: 'flex',
    width: '100vw'
  }
}));
const StyledNavLink = styled(NavLink)(() => ({
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '13px'
}));

const AccountContainer  = styled(Box)(() => ({
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '13px'
}));

const MobileNavigationBar = () => {
  const width = useWindowSize();
  const {
    state
  } = useAppContext();
  const {
    cartList
  } = state.cart;
  const iconStyle = {
    marginBottom: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const user = auth?.currentUser?.uid;
  return width <= 900 ? <Wrapper>
        <Dialog open={dialogOpen} fullWidth={isMobile} scroll="body" onClose={toggleDialog}>
          <Login />
        </Dialog>
      <StyledNavLink href='/'>
          <Home sx={iconStyle} fontSize="small" />
          Bosh sahifa
        </StyledNavLink>
      <StyledNavLink href='/mobile-category-nav'>
          <CategoryOutlined sx={iconStyle} fontSize="small" />
          Kategoriyalar
        </StyledNavLink>
      <StyledNavLink href='/mobile-search'>
              <SearchIcon fontSize="small" sx={iconStyle} />
         Qidiruv
        </StyledNavLink>
      <AccountContainer 
        onClick={()=>{
          if(user){
            router.push('/profile')
          }else if(!user){
            toggleDialog();
          }
        }}
      >
           <User2 sx={iconStyle} fontSize="small" />
          Mening profilim
        </AccountContainer>
    </Wrapper> : null;
};

export default MobileNavigationBar;