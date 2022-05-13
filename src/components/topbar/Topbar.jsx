import Image from 'components/BazarImage';
// import BazarMenu from 'components/BazarMenu';
import FlexBox from 'components/FlexBox';
import NavLink from 'components/nav-link/NavLink';
import { Span } from 'components/Typography';
import CallOutlined from '@mui/icons-material/CallOutlined';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import MailOutline from '@mui/icons-material/MailOutline';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { layoutConstant } from 'utils/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const TopbarWrapper = styled('div')(({
  theme
}) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: layoutConstant.topbarHeight,
  fontSize: 12,
  '& .topbarLeft': {
    '& .logo': {
      display: 'none'
    },
    '& .title': {
      marginLeft: '10px'
    },
    '@media only screen and (max-width: 900px)': {
      '& .logo': {
        display: 'block'
      },
      '& > *:not(.logo)': {
        display: 'none'
      }
    }
  },
  '& .topbarRight': {
    '& .link': {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText
    },
    '@media only screen and (max-width: 900px)': {
      '& .link': {
        display: 'none'
      }
    }
  },
  '& .smallRoundedImage': {
    height: 15,
    width: 25,
    borderRadius: 2
  },
  '& .handler': {
    height: layoutConstant.topbarHeight
  },
  '& .menuTitle': {
    fontSize: 12,
    marginLeft: '0.5rem',
    fontWeight: 600
  },
  '& .menuItem': {
    minWidth: 100
  },
  '& .marginRight': {
    marginRight: '1.25rem'
  }
}));

const Topbar = () => {


  useEffect(() => {// get language from browser
    // console.log(navigator.language);
  }, []);
  return <TopbarWrapper>
      <Container sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%'
    }}>
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link href="/">
              <Image display="block" height="28px" src="/assets/images/logo-white.png" alt="logo" />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+998976382481</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">uzstore-yordam@gmail.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <NavLink className="link" href="/help">
          </NavLink>

          {/* <BazarMenu handler={<TouchRipple className="handler marginRight">
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>}>
            {languageList.map(item => <MenuItem className="menuItem" key={item.title} onClick={handleLanguageClick(item)}>
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>)}
          </BazarMenu> */}
        </FlexBox>
      </Container>
    </TopbarWrapper>;
};

const languageList = [{
  title: 'EN',
  imgUrl: '/assets/images/flags/usa.png'
}, {
  title: 'BN',
  imgUrl: '/assets/images/flags/bd.png'
}, {
  title: 'HN',
  imgUrl: '/assets/images/flags/in.png'
}];
const currencyList = [{
  title: 'USD',
  imgUrl: '/assets/images/flags/usa.png'
}, {
  title: 'EUR',
  imgUrl: '/assets/images/flags/uk.png'
}, {
  title: 'BDT',
  imgUrl: '/assets/images/flags/bd.png'
}, {
  title: 'INR',
  imgUrl: '/assets/images/flags/in.png'
}];
export default Topbar;