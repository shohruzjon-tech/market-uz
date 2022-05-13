import FlexBox from 'components/FlexBox';
import NavbarLayout from 'components/layout/NavbarLayout';
import ProductCard1List from 'components/products/ProductCard1List';
import ProductCard9List from 'components/products/ProductCard9List';
import ProductFilterCard from 'components/products/ProductFilterCard';
import Sidenav from 'components/sidenav/Sidenav';
import { H5, Paragraph } from 'components/Typography';
import useWindowSize from 'hooks/useWindowSize';
import Apps from '@mui/icons-material/Apps';
import FilterList from '@mui/icons-material/FilterList';
import ViewList from '@mui/icons-material/ViewList';
import { Card, Grid, IconButton, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useState, useEffect } from 'react';
import { getListOfTotalProducts }from 'services/firebase.utils';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getCategoryListStart,
} from 'redux-actions/product-redux/product.actions';
import { 
  getListOfCategories
} from 'redux-actions/product-redux/product.selectors';


const ProductSearchResult = () => {
  const [view, setView] = useState('grid');
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [sortRating, setRating] = useState([]);
  const width = useWindowSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const isTablet = width < 1024;
  const toggleView = useCallback(v => () => {
    setView(v);
  }, []);

  useEffect(()=>{
    setLoading(true);
    dispatch(getCategoryListStart());
    getListOfTotalProducts().then((res)=>{
      setProducts(res);
      setLoading(false)
    })
  }, []);

  const filteredProducts = products?.filter(item=>
          item?.product_name?.toLowerCase().includes(
            router?.query?.id?.toLowerCase()) || item?.product_description?.toLowerCase().includes(
              router?.query?.id?.toLowerCase())
     );
     const categoriesList = useSelector(getListOfCategories);

  const ratingFilterFunc=()=>{
    const filArary = [];
    filteredProducts?.forEach((item)=>{
      sortRating?.forEach(rate=>{
        if(item?.product_rating===parseInt(rate?.rating_id)&&rate?.rating_state){
          filArary.push(item);
        }
      })
    });
    return filArary;
  };

  const topRatedProducts  = ratingFilterFunc();

  const getProductsListWithRating = ()=>{
    if(sortRating?.length>0&&topRatedProducts.length>0){
      return topRatedProducts;
    }
    return filteredProducts;
  };


  return <NavbarLayout>
      <Box pt={2.5}>
        <Card sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '55px',
        p: {
          xs: '1.25rem 1.25rem 0.25rem',
          sm: '1rem 1.25rem',
          md: '0.5rem 1.25rem'
        }
      }} elevation={1}>
          <div>
            <H5>Qidirilyapti  {'  '}   “{router?.query?.id}”</H5>
            <Paragraph color="grey.600">{filteredProducts?.length} ta mahsulot topildi</Paragraph>
          </div>
          <FlexBox alignItems="center" flexWrap="wrap" my="0.5rem">
            {/* <FlexBox alignItems="center" flex="1 1 0">
              <Paragraph color="grey.600" mr={2} whiteSpace="pre">
                Saralash:
              </Paragraph>
              <TextField variant="outlined" size="small" placeholder="Short by" select defaultValue={sortOptions[0].value} fullWidth sx={{
              flex: '1 1 0',
              mr: '1.75rem',
              minWidth: '150px'
            }}>
                {sortOptions.map(item => <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>)}
              </TextField>
            </FlexBox> */}

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                Ko'rinish:
              </Paragraph>
              <IconButton onClick={toggleView('grid')}>
                <Apps color={view === 'grid' ? 'primary' : 'inherit'} fontSize="small" />
              </IconButton>
              <IconButton onClick={toggleView('list')}>
                <ViewList color={view === 'list' ? 'primary' : 'inherit'} fontSize="small" />
              </IconButton>

              {!!isTablet && <Sidenav handle={<IconButton>
                      <FilterList fontSize="small" />
                    </IconButton>}>
                  <ProductFilterCard />
                </Sidenav>}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid item lg={3} xs={12} sx={{
          '@media only screen and (max-width: 1024px)': {
            display: 'none'
          }
        }}>
            <ProductFilterCard categories={categoriesList} ratingFilter={setRating} ratingArray={sortRating}/>
          </Grid>

          <Grid item lg={9} xs={12}>
             {isLoading? <FlexBox justifyContent="center"><CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/></FlexBox>: undefined}
            {view === 'grid' ? <ProductCard1List products={getProductsListWithRating()}/> : <ProductCard9List products={getProductsListWithRating()}/>}
          </Grid>
        </Grid>
      </Box>
    </NavbarLayout>;
};

const sortOptions = [{
  label: 'Narxiga qarab',
  value: 'product_price',
}, {
  label: 'Holatiga qarab',
  value: 'product_created_at'
}, {
  label: 'Reytingiga qarab',
  value: 'product_rating',
}];
export default ProductSearchResult;