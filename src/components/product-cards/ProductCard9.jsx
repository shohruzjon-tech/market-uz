import Image from "components/BazarImage";
import FlexBox from "components/FlexBox";
import { H5, Span } from "components/Typography";
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Remove from "@mui/icons-material/Remove";
import Visibility from "@mui/icons-material/Visibility";
import { Button, Chip, Dialog, DialogContent, Grid, IconButton, Rating } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import ProductCard9Style from "./ProductCard9Style";

const ProductCard9 = ({
  product_id,
  product_price,
  product_name,
  product_media,
  product_is_discounted,
  product_discounted_price,
  product_rating,
}) => {
  const [cartAmount, setCartAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => {
    setOpen(open => !open);
  }, []);
  const handleCartAmountChange = useCallback(amount => () => {
    console.log(amount);
    if (amount >= 0) setCartAmount(amount);
  }, []);
  const media = product_media?.filter(item=>item?.type_id===1)[0];
  return (// overflow="hidden" width="100%" {...props}
    <Fragment>
      <ProductCard9Style>
        <Grid container spacing={1}>
          <Grid item sm={3} xs={12}>
            <Box position="relative">
              <IconButton className="quick-view" size="small">
                <Visibility fontSize="small" onClick={toggleDialog} />
              </IconButton>
              <Image src={media?.media_link} alt={product_name} width="100%" height={200}/>
            </Box>
          </Grid>

          <Grid item sm={8} xs={12}>
            <FlexBox flexDirection="column" justifyContent="center" height="100%" p={2}>
              <Link href={`/product/${product_id}`}>
                <a>
                  <H5 fontWeight="600" my="0.5rem">
                    {product_name}
                  </H5>
                </a>
              </Link>

              <Rating value={product_rating || 0} color="warn" readOnly />

              <FlexBox mt={1} mb={2} alignItems="center">
                <H5 fontWeight={600} color="primary.main" mr={1}>
                  {product_price?.toLocaleString()} so'm
                </H5>
                {product_is_discounted&&product_discounted_price>0 && <Span fontWeight="600" color="grey.600">
                    <del>{(product_price - product_price * product_discounted_price / 100).toFixed(2)} so'm</del>
                  </Span>}
              </FlexBox>

              <FlexBox alignItems="center" justifyContent="space-between" flexDirection="row-reverse" height="30px" sx={{
                display: {
                  xs: "flex",
                  sm: "none"
                }
              }}>
                
              </FlexBox>
            </FlexBox>
          </Grid>
        </Grid>
      </ProductCard9Style>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent sx={{
          paddingBottom: "1.25rem"
        }}>
          <IconButton sx={{
            position: "absolute",
            top: "0",
            right: "0"
          }}>
            <Close className="close" fontSize="small" color="primary" onClick={toggleDialog} />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

ProductCard9.defaultProps = {
  title: "Apple iPhone 5 Unlocked 16GB 8MP Used Cell-Phone-16gbIOS Used Refurbished 100%Factory Used",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
  subcategories: [{
    title: "Bike",
    url: "/#"
  }, {
    title: "Ducati",
    url: "/#"
  }, {
    title: "Motors",
    url: "/#"
  }]
};
export default ProductCard9;