import React from 'react';

interface IProps {
  width: number;
  height: number;
  color: string;
}

function IconLogo({ width, height, color }: IProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.0780029 27V0.0579834H16.95V4.99798H5.322V11.154H15.848V15.828H5.322V22.06H16.95V27H0.0780029ZM21.548 23.808C21.548 22.8453 21.8837 22.0283 22.555 21.357C23.2263 20.6856 24.0433 20.35 25.006 20.35C25.4873 20.35 25.9433 20.4386 26.374 20.616C26.8047 20.7933 27.1783 21.0403 27.495 21.357C27.8117 21.6737 28.0587 22.041 28.236 22.459C28.4133 22.877 28.502 23.3266 28.502 23.808C28.502 24.2893 28.4133 24.739 28.236 25.157C28.0587 25.575 27.8117 25.9423 27.495 26.259C27.1783 26.5757 26.8047 26.8226 26.374 27C25.9433 27.1773 25.4873 27.266 25.006 27.266C24.0433 27.266 23.2263 26.9303 22.555 26.259C21.8837 25.5876 21.548 24.7707 21.548 23.808Z'
        fill={color}
      />
    </svg>
  );
}

export default IconLogo;
