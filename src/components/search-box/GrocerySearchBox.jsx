import BazarButton from "components/BazarButton";
import { Box,TextField } from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { SearchOutlinedIcon, SearchResultCard } from "./SearchBox";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import FlexBox from 'components/FlexBox';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { H6 } from 'components/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CircularProgress from '@mui/material/CircularProgress';


const GrocerySearchBox = () => {
  const [returnedProducts, setReturnedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [listener, setListener] = useState(false);
  const [emptyResult, setEmpty] = useState();
  const parentRef = useRef();

  const searchWithQuery = async (event)=>{
    setReturnedProducts([]);
    setLoading(true);
    setEmpty(undefined);
    const stringArray = [];
    Array.from(event?.target?.value)?.forEach((item)=>{
        if(item!==' '){
          stringArray.push(item);
        }
    })
     if(stringArray.length===0||event.target.value===null||!event.target.value||event.target.value===' '){
      setLoading(false);
      setListener(false);
      setReturnedProducts([]);
      return;
     }
     setListener(true);
     try {
      const getSearchResult=await axios(`https://8e8e861a65d5480eb27d2bbc7cd62655.ent-search.us-east4.gcp.elastic-cloud.com/api/as/v1/engines/uzstore/search?query=${event.target.value}`,{
        headers: {
          Authorization: `Bearer search-zfwz83xzqchjxbqer4whi9cn`,
        },
      });
      setReturnedProducts(getSearchResult?.data?.results);
      setLoading(false);
      if(getSearchResult?.data?.results?.length===0 || !getSearchResult?.data?.results){
        setEmpty('Qidirilayotgan mahsulot topilmadi!');
      }
     } catch (error) {
       toast.error('Qidiruv tizimida hatolik bor. Iltimos keyinroq urinib kuring!');
       setListener(false);
       setLoading(false);
     }
  };

 const detectURLs  = (message) => {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message?.match(urlRegex)
};
  
  return <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto" {...{
    ref: parentRef
  }}>
      <TextField variant="outlined" placeholder="qidirilyapti..." fullWidth onChange={searchWithQuery} InputProps={{
      sx: {
        height: 44,
        borderRadius: 300,
        paddingRight: 0,
        color: "grey.700",
        overflow: "hidden",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main"
        }
      },
      endAdornment: <BazarButton onClick={searchWithQuery} color="primary" variant="contained" disableElevation sx={{
        px: "3rem",
        height: "100%",
        borderRadius: "0 300px 300px 0"
      }}>
              Qidirish
            </BazarButton>,
      startAdornment: <SearchOutlinedIcon fontSize="small" />
    }} />

      {!!listener && <ClickAwayListener onClickAway={()=>setListener(false)}><SearchResultCard elevation={2}>
          {emptyResult? <H6 textAlign="center" py={3}>{emptyResult}</H6> : null}
          {isLoading?<FlexBox  justifyContent="center" py={3}> <CircularProgress color="error" /></FlexBox> :
           returnedProducts.map(item => <Link href={`/product/${item?.product_id?.raw}`} key={item?.product_id?.raw}>
          <FlexBox px={2} py={1} flexWrap="wrap" alignItems="center" sx={{cursor: 'pointer'}}>
              <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                <Avatar src={detectURLs(item?.product_media?.raw[0])?.[0]} sx={{
              height: 64,
              width: 64
            }} />
                <Box ml={2.5}>
                  <H6 my="0px">{item?.product_name?.raw}</H6>
                  <Typography fontSize="14px" color="grey.600">
                    {item?.product_price?.raw?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm
                  </Typography>
                </Box>
              </FlexBox>
            </FlexBox>
            </Link>)}
        </SearchResultCard></ClickAwayListener>}
    </Box>;
};

export default GrocerySearchBox;