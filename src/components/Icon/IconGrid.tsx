import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconList({ width, height, color }: IProps): JSX.Element {
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
        d='M0 6H5V0H0V6ZM0 13H5V7H0V13ZM6 13H11V7H6V13ZM12 13H17V7H12V13ZM6 6H11V0H6V6ZM12 0V6H17V0H12Z'
        fill={color}
      />
    </svg>
  );
}

export default IconList;
