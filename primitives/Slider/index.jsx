import React from 'react';

export const Slider = ({ use: Component = 'span', disabled, ...props }) => {
  return <Component {...props} data-component-slider data-state-disabled={disabled} />;
};

const SliderTrack = ({ use: Component = 'span', ...props }) => {
  return <Component {...props} data-component-slider-track />;
};
SliderTrack.toString = () => 'data-component-slider-track';

const SliderRange = ({ use: Component = 'span', ...props }) => {
  return <Component {...props} data-component-slider-range />;
};

const SliderThumb = ({ use: Component = 'span', ...props }) => {
  return <Component {...props} data-component-slider-thumb />;
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

Slider.Range = SliderRange;
Slider.Track = SliderTrack;
Slider.Thumb = SliderThumb;
