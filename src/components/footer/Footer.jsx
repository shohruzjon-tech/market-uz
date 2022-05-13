import AppStore from 'components/AppStore';
import BazarIconButton from 'components/BazarIconButton';
import Image from 'components/BazarImage';
import Facebook from 'components/icons/Facebook';
import Google from 'components/icons/Google';
import Instagram from 'components/icons/Instagram';
import Twitter from 'components/icons/Twitter';
import Youtube from 'components/icons/Youtube';
import { Paragraph } from 'components/Typography';
import { Box, Container, Grid, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FlexBox from '../FlexBox'; // styled component

const StyledLink = styled('a')(({
  theme
}) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: theme.palette.grey[500],
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    color: theme.palette.grey[100]
  }
}));

const Footer = () => {
  return <footer>
      <Box bgcolor="#0c0e30">
        <Container sx={{
        p: '1rem',
        color: 'white'
      }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5} src="/assets/images/logo-white.png" alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                   Uzstore O'zbekiston hududidagi mijozlarga onlayn ravishda 
                   mahsulot yetqazib berish bilan shug'illanuvchi tashkilot
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>

                <div>
                  {aboutLinks.map((item, ind) => <Link href={item?.link} key={ind}>
                      <StyledLink>{item?.name}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <div>
                  {customerCareLinks.map((item, ind) => <Link href={item?.link} key={ind}>
                      <StyledLink>{item?.name}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box py={0.6} color="grey.500">
                  22 Chilonzor, Toshkent shahri, 100700, O'zbekiston
                </Box>
                <Box py={0.6} color="grey.500">
                  Elektron pochta manzili: uzstore.yordam@gmail.com
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Telefon: +998976382481
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopenner" key={ind}>
                      <BazarIconButton m={0.5} bgcolor="rgba(0,0,0,0.2)" fontSize="12px" padding="10px">
                        <item.icon fontSize="inherit" />
                      </BazarIconButton>
                    </a>)}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>;
};

const aboutLinks = [
  {
    name: 'Biz haqimizda',
    link: '/aboutus'
  },
  {
    name: `Bizning do'konlar`,
    link: '/'
  },
  {
    name: 'Buyurtmalaringiz',
    link: '/orders'
  }
];
const customerCareLinks = [{
  name: 'Aloqa uchun',
  link: '/contact'
}];
const iconList = [{
  icon: Facebook,
  url: 'https://www.facebook.com/UILibOfficial'
}, {
  icon: Twitter,
  url: 'https://twitter.com/uilibofficial'
}, {
  icon: Youtube,
  url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg'
}, {
  icon: Google,
  url: '/'
}, {
  icon: Instagram,
  url: 'https://www.instagram.com/uilibofficial/'
}];
export default Footer;