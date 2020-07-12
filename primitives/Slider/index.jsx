import React from 'react';
import { styled } from '../../css';

export const Slider = styled(
  ({ disabled, ...props }) => {
    return (
      <styled.Box
        {...props}
        as={props.as || 'span'}
        data-component-slider
        data-state-disabled={disabled}
      />
    );
  },
  {
    display: 'block',
  }
);

const SliderTrack = styled(
  (props) => {
    return <styled.Box {...props} as={props.as || 'span'} data-component-slider-track />;
  },
  {
    display: 'block',
    height: '5px',
    backgroundColor: 'gray',
    position: 'relative',
  }
);

const SliderRange = styled(
  (props) => {
    return <styled.Box {...props} as={props.as || 'span'} data-component-slider-range />;
  },
  {
    display: 'block',
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
  }
);

const SliderThumb = styled(
  (props) => {
    return <styled.Box {...props} as={props.as || 'span'} data-component-slider-thumb />;
  },
  {
    display: 'block',
    height: '15px',
    width: '15px',
    borderRadius: '9999px',
    backgroundColor: 'black',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
);

Slider.Range = SliderRange;
Slider.Track = SliderTrack;
Slider.Thumb = SliderThumb;
