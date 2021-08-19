import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconGrid({ width, height, color }: IProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 13H17V7H0V13ZM0 0V6H17V0H0Z'
        fill={color}
      />
    </svg>
  );
}

export default IconGrid;
