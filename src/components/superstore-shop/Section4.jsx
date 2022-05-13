import BazarCard from "components/BazarCard";
import DottedStar from "components/icons/DottedStar";
import RankBadge from "components/icons/RankBadge";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard4 from "../product-cards/ProductCard4";
import ProductCard5 from "../product-cards/ProductCard5";
import { useRouter } from 'next/router';

const Section4 = props => {
  const {
    topRatedBrands,
    topRatedList
  } = props;
  const router = useRouter();

  return <Box mb={7.5}>
      <Container>
        <Box>
              <CategorySectionHeader icon={<RankBadge />} title="Yuqori reytinga ega mahsulotlar" seeMoreLink="/category/top-rated" />
              <BazarCard sx={{
              p: "1rem"
            }}>
                <Grid container spacing={4}>
                  {topRatedList.map(item => <Grid item lg={2} md={3} sm={4} xs={6} key={item.product_name}>
                      <Link href={`/product/${item.product_id}`}>
                        <a>
                          <ProductCard4 {...item} />
                        </a>
                      </Link>
                    </Grid>)}
                </Grid>
              </BazarCard>
        </Box>
      </Container>
    </Box>;
};

export default Section4;