import { differenceInMinutes } from "date-fns";
import ceil from "lodash/ceil";
export const getDateDifference = date => {
  let diff = differenceInMinutes(new Date(), new Date(date));
  if (diff < 60) return diff + " daqiqa oldin ";
  diff = ceil(diff / 60);
  if (diff < 24) return `${diff} soat oladin`;
  diff = ceil(diff / 24);
  if (diff < 30) return `${diff} kun oldin`;
  diff = ceil(diff / 30);
  if (diff < 12) return `${diff} oy oldin`;
  diff = diff / 12;
  return `${diff.toFixed(1)} yil oldin`;
};