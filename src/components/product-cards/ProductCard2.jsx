import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import Link from "next/link";
import React from "react";

const ProductCard2 = ({
  imgUrl,
  title,
  price,
  id
}) => {
  return <Link href={`/product/${id}`}>
      <a>
        <HoverBox borderRadius="8px" mb={1}>
          <LazyImage src={imgUrl} width='100%' height={170} layout="responsive" alt={title} />
        </HoverBox>
        <H4 fontWeight="600" fontSize="14px" mb={0.5} ellipsis>
          {title}
        </H4>
        <H4 fontWeight="600" fontSize="14px" color="primary.main">
            {Math.ceil(price).toLocaleString()} so'm
        </H4>
      </a>
    </Link>;
};

export default ProductCard2;