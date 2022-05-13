import BazarCard from "components/BazarCard";
import Category from "components/icons/Category";
import { Box, Container, Grid, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import CategorySectionHeader from "../CategorySectionHeader";

const StyledBazarCard = styled(BazarCard)(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  padding: "0.75rem",
  borderRadius: 8,
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3]
  }
}));

const Section10 = ({
  categories
}) => {
  return <Container sx={{
    mb: "70px",
    mt: '28px',
  }}>
      <CategorySectionHeader title="Kategoriyalar" icon={<Category color="primary" />} seeMoreLink="/category/all-products" />
      <Grid container spacing={3}>
        {categories.map((item, ind) => <Grid item lg={2} md={3} sm={4} xs={12} key={ind}>
            <Link href={`/category/${item?.category_id}`}>
              <a>
                <StyledBazarCard elevation={1}>
                  <img src={item?.category_thumb} alt={item?.category_name} height={52} width={52} objectFit="contain" borderRadius="8px" />
                  <Box fontWeight="600" ml={1.25}>
                    {item?.category_name}
                  </Box>
                </StyledBazarCard>
              </a>
            </Link>
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section10;