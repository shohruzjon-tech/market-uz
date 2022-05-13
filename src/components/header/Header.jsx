import BazarButton from 'components/BazarButton';
import Image from 'components/BazarImage';
import CategoryMenu from 'components/categories/CategoryMenu';
import FlexBox from 'components/FlexBox';
import Category from 'components/icons/Category';
import Login from 'components/sessions/Login';
import { useAppContext } from 'contexts/app/AppContext';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import PersonOutline from '@mui/icons-material/PersonOutline';
import { Box, Container, Dialog, IconButton, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { layoutConstant } from 'utils/constants';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import GrocerySearchBox from '../search-box/GrocerySearchBox'; // component props interface
import { auth } from 'services/firebase.app';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { getCurrentUserData } from 'redux-actions/user-redux/user.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';
import { signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { userAuthSucces } from 'redux-actions/user-redux/user.actions';

// styled component
export const HeaderWrapper = styled(Box)(({
  theme
}) => ({
  position: 'relative',
  zIndex: 1,
  height: layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: layoutConstant.mobileHeaderHeight
  }
}));

const Header = ({
  isFixed,
  className,
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const user_data = useSelector(getCurrentUserData);
  const router = useRouter();
  const dispatch = useDispatch();
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = auth?.currentUser?.uid;

  const {
    state
  } = useAppContext();


  const signOutFromAuth = async ()=>{
      try {
        await signOut(auth);
        toast.success('Tizimdan chiqarildingiz');
        dispatch(userAuthSucces(undefined));
      } catch (error) {
        toast.error('Tizimdan chiqishda hatolik yuz berdi');
      }
  };
  return <HeaderWrapper className={clsx(className)}>
      <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%'
    }}>
        <FlexBox alignItems="center" mr={2} minWidth="170px" sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
          <Link href="/">
            <a>
              <Image height={28} mb={0.5} src="/assets/images/uzstore-blue.png" alt="logo" />
            </a>
          </Link>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <GrocerySearchBox />
        </FlexBox>

        <FlexBox alignItems="center" sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
        <Tooltip title='Mening profilim'>
          <Box component={IconButton} ml={2} p={1.25} bgcolor="grey.200" onClick={(event)=>{
            if(user){
              handleClick(event);
            }else if(!user){
              toggleDialog();
            }
            }}>
            <PersonOutline />
          </Box>
          </Tooltip>
          <Box  ml={1}  p={1.25} >Mening profilim </Box> 
        </FlexBox>

        <Dialog open={dialogOpen} fullWidth={isMobile} scroll="body" onClose={toggleDialog}>
          <Login />
        </Dialog>
      </Container>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>router.push('/profile')}>
          <Avatar src={user_data?.user_avatar}/> Mening profilim
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>router.push('/profile/edit')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Sozlamalar
        </MenuItem>
        <MenuItem onClick={signOutFromAuth}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          profildan chiqish
        </MenuItem>
      </Menu>
    </HeaderWrapper>;
};

export default Header;