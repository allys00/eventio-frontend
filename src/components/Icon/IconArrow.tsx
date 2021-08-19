import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconArrow({ width, height, color }: IProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0L5 5L10 0H0Z'
        fill={color}
      />
    </svg>
  );
}

export default IconArrow;
