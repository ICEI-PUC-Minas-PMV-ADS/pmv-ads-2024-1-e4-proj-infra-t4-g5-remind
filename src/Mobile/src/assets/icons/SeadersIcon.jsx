import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SearchIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <G id="Icon / message">
      <Path
        id="Path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6188 23C14.2218 22.9998 13.8589 22.7758 13.6808 22.421L10.5718 16.2C10.401 15.8574 10.4297 15.4492 10.6468 15.134L15.6668 8.33396L8.86679 13.352C8.55194 13.569 8.14395 13.5978 7.80179 13.427L1.57879 10.318C1.2067 10.1304 0.981054 9.7403 1.00405 9.32427C1.02704 8.90823 1.2943 8.54534 1.68479 8.39996L21.5898 1.06396C21.9732 0.92228 22.404 1.01668 22.693 1.30571C22.9821 1.59474 23.0765 2.02555 22.9348 2.40896L15.5998 22.315C15.4555 22.7069 15.0918 22.9754 14.6748 22.998L14.6188 23Z"
        fill="#B9B9C4" // Cor padrão do ícone (você pode personalizar)
      />
    </G>
  </Svg>
);

export default SearchIcon;
