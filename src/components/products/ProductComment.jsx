import BazarAvatar from 'components/BazarAvatar';
import BazarRating from 'components/BazarRating';
import FlexBox from 'components/FlexBox';
import { H5, H6, Paragraph, Span } from 'components/Typography';
import { Box } from '@mui/material';
import { getDateDifference } from 'utils/utils';
import React from 'react';

const ProductComment = ({
  comment_left_by,
  comment_avatar,
  comment_marked,
  comment_created_at,
  comment_content
}) => {
  return <Box mb={4} maxWidth="600px">
      <FlexBox alignItems="center" mb={2}>
        <BazarAvatar src={comment_avatar} height={48} width={48} />
        <Box ml={2}>
          <H5 mb={0.5}>{comment_left_by}</H5>
          <FlexBox alignItems="center">
            <BazarRating value={comment_marked} color="warn" readOnly />
            <H6 mx={1.25}>({comment_marked})</H6>
            <Span>{getDateDifference(comment_created_at)}</Span>
          </FlexBox>
        </Box>
      </FlexBox>

      <Paragraph color="grey.700">{comment_content}</Paragraph>
    </Box>;
};

export default ProductComment;