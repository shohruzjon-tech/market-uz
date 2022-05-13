import Link from "next/link";
import { Box } from "@mui/material";
import FlexBox from "components/FlexBox";
import HoverBox from "components/HoverBox";
import { H4 } from "components/Typography";
import BazarCard from "components/BazarCard";
import LazyImage from "components/LazyImage";
import GiftBox from "components/icons/GiftBox";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";
import React, { useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";

const Section13 = ({
  bigDiscountList
}) => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);else if (width < 650) setVisibleSlides(2);else if (width < 950) setVisibleSlides(4);else setVisibleSlides(6);
  }, [width]);
  return <CategorySectionCreator icon={<GiftBox />} title="Yuqori qiymatdagi chegirmalar" seeMoreLink="/category/discounted">
      <Box my="-0.25rem">
        <Carousel totalSlides={9} visibleSlides={visibleSlides}>
          {bigDiscountList?.filter(item=>item?.product_discounted_price>0)?.map(item => <Box py={0.5} key={item?.product_id}>
              <BazarCard sx={{
            p: "1rem"
          }}>
                <Link href={`/product/${item?.product_id}`}>
                  <a>
                    <HoverBox borderRadius="8px" mb={1}>
                      <LazyImage src={item?.product_media[0]?.media_link} width='100%' height={120} layout="responsive" alt={item?.product_name}/>
                    </HoverBox>
                    <H4 fontWeight="600" fontSize="14px" mb={0.5} ellipsis>
                      {item?.product_name}
                    </H4>

                    <FlexBox>
                      <H4 fontWeight="600" fontSize="14px" color="primary.main" mr={1}>
                        {Math.ceil(item?.product_price).toLocaleString()}
                      </H4>

                      <H4 fontWeight="600" fontSize="14px" color="grey.600">
                        <del>{Math.ceil(item?.product_price+item?.product_discounted_price).toLocaleString()}</del>
                      </H4>
                    </FlexBox>
                  </a>
                </Link>
              </BazarCard>
            </Box>)}
        </Carousel>
      </Box>
    </CategorySectionCreator>;
};

export default Section13;