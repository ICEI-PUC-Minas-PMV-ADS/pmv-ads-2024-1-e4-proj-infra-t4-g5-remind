import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const HomeIcon = ({ active }) => (
  <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
    <G id="Icon / home">
      <Path
        id="Path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.7L11 1L21 8.7V20.8C21 22.015 20.0051 23 18.7778 23H3.22222C1.99492 23 1 22.015 1 20.8V8.7Z"
        fill={active ? '#443368' : '#656F7D'}
        stroke={active ? '#443368' : '#656F7D'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="Path_2">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.66675 23V12H14.3334V23"
          fill="white"
        />
        <Path
          d="M7.66675 23V12H14.3334V23"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);

export default HomeIcon;
