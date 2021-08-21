import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconPlus({ width, height, color }: IProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z'
        fill={color}
      />
    </svg>
  );
}

export default IconPlus;
