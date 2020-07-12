import React from 'react';
import { Slider as SliderPrimitive } from '../primitives/Slider';
import { styled } from '../css';
import { theme } from '../theme';

const StyledSlider = styled(SliderPrimitive, {
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

const Track = styled(SliderPrimitive.Track, {
  backgroundColor: theme.colors.gray400,
  height: '2px',
  borderRadius: 1,
});

const Range = styled(SliderPrimitive.Range, {
  backgroundColor: theme.colors.blue600,
  borderRadius: 'inherit',
});

const Thumb = styled(SliderPrimitive.Thumb, {
  height: '12px',
  width: '12px',
  borderRadius: '6px',
  backgroundColor: theme.colors.white,
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.2)',
});

export const Slider = (props) => (
  <StyledSlider {...props}>
    <Track>
      <Range />
      <Thumb />
    </Track>
  </StyledSlider>
);
