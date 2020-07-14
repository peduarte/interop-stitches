import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Slider = ({ compose: Component = Box, as = 'span', disabled, ...props }) => {
  return <Component {...props} as={as} data-component-slider data-state-disabled={disabled} />;
};

Slider.Track = ({ compose: Component = Box, as = 'span', ...props }) => {
  return <Component {...props} as={as} data-component-slider-track />;
};

Slider.Range = ({ compose: Component = Box, as = 'span', ...props }) => {
  return <Component {...props} as={as} data-component-slider-range />;
};

Slider.Thumb = ({ compose: Component = Box, as = 'span', ...props }) => {
  return <Component {...props} as={as} data-component-slider-thumb />;
};

export const styles = {
  slider: {
    display: 'block',
  },

  track: {
    display: 'block',
    height: '5px',
    backgroundColor: 'gray',
    position: 'relative',
  },

  range: {
    display: 'block',
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
  },

  thumb: {
    display: 'block',
    height: '15px',
    width: '15px',
    borderRadius: '9999px',
    backgroundColor: 'black',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
