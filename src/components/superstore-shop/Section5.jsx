import BazarCard from "components/BazarCard";
import NewArrival from "components/icons/NewArrival";
import { Grid } from "@mui/material";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard2 from "../product-cards/ProductCard2";

const Section5 = ({
  newArrivalsList
}) => {
  return <CategorySectionCreator icon={<NewArrival />} title="Eng yangi mahsulotlar" seeMoreLink="/category/new">
      <BazarCard sx={{
      p: "1rem"
    }}>
        <Grid container spacing={3}>
          {newArrivalsList?.slice(0, 7)?.map(item => <Grid item lg={2} md={3} sm={4} xs={6} key={item.product_id}>
              <ProductCard2 
                  imgUrl={item?.product_media[0]?.media_link}
                  title={item?.product_name}
                  price={item?.product_price}
                  id={item?.product_id}
                />
            </Grid>)}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>;
};

export default Section5;