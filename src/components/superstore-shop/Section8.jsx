import LazyImage from 'components/LazyImage';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Section8 = () => {
  return <Container sx={{
    mb: '70px'
  }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Link href="/product/1643199887887">
            <a>
              <LazyImage src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2FUntitled-1.jpg?alt=media&token=abb1b480-c779-47bd-b59d-d2b611a8c650" height={342} width={385} layout="responsive" objectFit="contain" alt="smart watch o'zbekiston buylab eltuv xizmati" />
            </a>
          </Link>
        </Grid>
        <Grid item xs={12} md={8}>
          <Link href="/product/1643708705765">
            <a>
              <LazyImage src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fsssssss.jpg?alt=media&token=3c3a8fbc-8dba-45e1-94a9-8bb8c91c8b51" height={342} width='100%' layout="responsive" objectFit="contain" alt="Elektr isitgich eng hamyonbob va hammabob mahsulot"/>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Container>;
};

export default Section8;