import BazarCard from "components/BazarCard";
import BazarRating from "components/BazarRating";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/app/AppContext";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Close from "@mui/icons-material/Close";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import { Box, Button,Dialog, DialogContent, IconButton, styled } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import FlexBox from "../FlexBox";
import { useRouter }  from 'next/router';
const StyledBazarCard = styled(BazarCard)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  margin: "auto",
  overflow: "hidden",
  transition: "all 250ms ease-in-out",
  borderRadius: "8px",
  "&:hover": {
    "& .css-1i2n18j": {
      display: "flex"
    }
  }
}));
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "block"
  }
}));
const HoverIconWrapper = styled(Box)(({
  theme
}) => ({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  top: "7px",
  right: "15px",
  cursor: "pointer",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex"
  }
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

const ProductCard1 = ({product, hoverEffect, showProductSize, hideRating}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    state,
    dispatch
  } = useAppContext();
  const cartItem = state.cart.cartList.find(item => item.id === product?.product_id);
  const toggleDialog = useCallback(() => {
    setOpen(open => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsFavorite(fav => !fav);
  };
  return <StyledBazarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <HoverIconWrapper>
          <IconButton sx={{
          p: "6px"
        }} onClick={toggleDialog}>
            <RemoveRedEye color="secondary" fontSize="small" />
          </IconButton>
          <IconButton sx={{
          p: "6px"
        }} onClick={toggleIsFavorite}>
            {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" />}
          </IconButton>
        </HoverIconWrapper>
        <Link href={`/product/${product?.product_id}`}>
          <a>
            <LazyImage src={product?.product_media[0]?.media_link} width='100%' height={200} layout="responsive" alt={product?.product_name} />
          </a>
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${product?.product_id}`}>
              <a>
                <H3 className="title" fontSize="14px" textAlign="left" fontWeight="600" color="text.secondary" mb={1} title='hello'>
                  {product?.product_name}
                </H3>
              </a>
            </Link>

            {!hideRating && <BazarRating value={product?.product_rating || 0} color="warn" readOnly />}
            {showProductSize && <Span color="grey.600" mb={1} display="block">
                300ml
              </Span>}

            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.main">
                {product?.product_price.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  so'm
              </Box>
              {product?.product_discounted_price>0 && <Box color="grey.600" fontWeight="600">
                  <del>{(product?.product_price + product?.product_discounted_price)?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm</del>
                </Box>}
            </FlexBox>
          </Box>

          <FlexBox className="add-cart" flexDirection="column-reverse" alignItems="center" justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"} width="30px">
            <Button variant="outlined" color="primary" sx={{
            padding: "3px"
          }} onClick={()=>router.push(`/product/${product?.product_id}`)}>
              <StorefrontIcon fontSize="small" />
            </Button>
          </FlexBox>
        </FlexBox>
      </ContentWrapper>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent sx={{
        paddingBottom: "1.25rem"
      }}>
          <IconButton sx={{
          position: "absolute",
          top: "0",
          right: "0"
        }} onClick={toggleDialog}>
            <Close className="close" fontSize="small" color="primary" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </StyledBazarCard>;
};

export default ProductCard1;