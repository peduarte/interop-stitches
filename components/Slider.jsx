import React from 'react';
import { Slider as SliderPrimitive, styles } from '../primitives/Slider';
import { styled } from '../css';
import { theme } from '../theme';

const StyledSlider = styled('span', {
  ...styles.slider,
  paddingTop: 3,
  paddingBottom: 3,
  '[data-state-disabled] [data-component-slider-track]': {
    backgroundColor: theme.colors.gray300,
  },

  '[data-state-disabled] [data-component-slider-range]': {
    backgroundColor: theme.colors.gray400,
  },

  '[data-state-disabled] [data-component-slider-thumb]': {
    boxShadow: 'none',
    backgroundColor: theme.colors.gray400,
  },
});

const StyledTrack = styled('span', {
  ...styles.track,
  backgroundColor: theme.colors.gray400,
  height: '2px',
  borderRadius: 1,
});

const StyledRange = styled('span', {
  ...styles.range,
  backgroundColor: theme.colors.blue600,
  borderRadius: 'inherit',
});

const StyledThumb = styled('span', {
  ...styles.thumb,
  height: '12px',
  width: '12px',
  borderRadius: '6px',
  backgroundColor: theme.colors.white,
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.2)',
});

export const Slider = (props) => (
  <SliderPrimitive use={StyledSlider} {...props}>
    <SliderPrimitive.Track use={StyledTrack}>
      <SliderPrimitive.Range use={StyledRange} />
      <SliderPrimitive.Thumb use={StyledThumb} />
    </SliderPrimitive.Track>
  </SliderPrimitive>
);
