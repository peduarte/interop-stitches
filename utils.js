import { styled, css } from './css';

export const colorRed = css.color('red600');
export const size5 = css.fontSize('5');
export const colorRedSize5 = css.compose(colorRed, size5);
