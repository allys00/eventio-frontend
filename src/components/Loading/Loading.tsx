import React from 'react';
import { styled } from '../../styles/theme';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading({
  width = 150,
  height = 150,
  color = '#a7a7a7',
}: IProps) {
  return (
    <LoadingWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{
          shapeRendering: 'auto',
        }}
        width={width}
        height={height}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <g transform='rotate(0 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.875s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(45 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.75s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(90 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.625s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(135 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.5s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(180 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.375s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(225 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.25s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(270 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='-0.125s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
        <g transform='rotate(315 50 50)'>
          <rect
            x='48.5'
            y='25'
            rx='0'
            ry='0'
            width='3'
            height='14'
            fill={color}
          >
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='1s'
              begin='0s'
              repeatCount='indefinite'
            ></animate>
          </rect>
        </g>
      </svg>
    </LoadingWrapper>
  );
}
