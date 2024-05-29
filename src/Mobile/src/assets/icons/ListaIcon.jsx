import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ListaIcon = ({ active }) => (
  <Svg width={12} height={12} viewBox="0 0 14 14" fill="none">
    <Path
      d="M5.72222 1.55459H13H5.72222ZM5.72222 7.00078L13 7L5.72222 7.00078ZM5.72222 12.4469H13H5.72222ZM1.47222 1.55385H1.48167H1.47222ZM1.47222 7H1.48167H1.47222ZM1.47222 12.4462H1.48167H1.47222ZM1.94444 1.55385C1.94444 1.85972 1.73302 2.10769 1.47222 2.10769C1.21142 2.10769 1 1.85972 1 1.55385C1 1.24797 1.21142 1 1.47222 1C1.73302 1 1.94444 1.24797 1.94444 1.55385ZM1.94444 7C1.94444 7.30583 1.73302 7.55385 1.47222 7.55385C1.21142 7.55385 1 7.30583 1 7C1 6.69417 1.21142 6.44615 1.47222 6.44615C1.73302 6.44615 1.94444 6.69417 1.94444 7ZM1.94444 12.4462C1.94444 12.752 1.73302 13 1.47222 13C1.21142 13 1 12.752 1 12.4462C1 12.1403 1.21142 11.8923 1.47222 11.8923C1.73302 11.8923 1.94444 12.1403 1.94444 12.4462Z"
      fill={active ? '#4b0195' : '#656F7D'}
      stroke={active ? '#4b0195' : '#656F7D'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ListaIcon;
