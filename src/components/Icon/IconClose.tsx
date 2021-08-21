import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconClose({ width, height, color }: IProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H24V24H0V0Z'
        stroke='black'
        strokeOpacity='0.01'
        strokeWidth='0'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
        fill={color}
      />
    </svg>
  );
}

export default IconClose;
