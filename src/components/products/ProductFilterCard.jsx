import Accordion from 'components/accordion/Accordion';
import AccordionHeader from 'components/accordion/AccordionHeader';
import FlexBox from 'components/FlexBox';
import { H6, Paragraph, Span } from 'components/Typography';
import { Card, Checkbox, Divider, FormControlLabel, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRouter }  from 'next/router';

const ProductFilterCard = ({categories, ratingFilter, ratingArray}) => {
  const router = useRouter();

  const onChage = (event)=>{
        const filteredArr = ratingArray?.filter(item=>item?.rating_id!==event.target.value);
        ratingFilter([
          ...filteredArr,
          {
            rating_id: event.target.value,
            rating_state: event.target.checked,
          }
        ]);
  }
  return <Card sx={{
    p: '18px 27px',
    overflow: 'auto'
  }} elevation={1}>
      <H6 mb={1.25}>Kategoriyalar</H6>

      {categories?.map(item => <Paragraph className="cursor-pointer" fontSize="14px" color="grey.600" py={0.15} 
          onClick={()=>router.push(`/category/${item?.category_id}`)}
          key={item?.category_id} sx={{
            cursor: 'pointer',
            margin: '8px 0',
          }}>
            {item?.category_name}
          </Paragraph>)}
      <Divider sx={{
      mt: '18px',
      mb: '24px'
    }} />

      <H6 mb={2}>Reyting orqali saralash</H6>
      {[5, 4, 3, 2, 1].map(item => <FormControlLabel control={<Checkbox size="small" color="secondary" value={item} onClick={onChage}/>} label={<Rating size="small"   value={item} color="warn" readOnly />} sx={{
      display: 'flex'
    }} key={item} />)}

      <Divider sx={{
      my: '1.5rem'
    }} />

      <H6 mb={2}>Rangiga qarab saralash</H6>
      <FlexBox mb={2}>
        {colorList.map(item => <Box sx={{
        bgcolor: item,
        height: '25px',
        width: '25px',
        mr: '10px',
        borderRadius: 300,
        cursor: 'pointer'
      }} key={item} />)}
      </FlexBox>
    </Card>;
};
const colorList = ['#1C1C1C', '#FF7A7A', '#FFC672', '#84FFB5', '#70F6FF', '#6B7AFF'];
export default ProductFilterCard;