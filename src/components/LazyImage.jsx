import { bgcolor, borderRadius, compose, spacing, styled } from '@mui/system';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from 'react';
const LazyImage = styled(({
  borderRadius,
  ...rest
}) => <LazyLoadImage {...rest} effect="blur"/>)(compose(spacing, borderRadius, bgcolor));
export default LazyImage;     