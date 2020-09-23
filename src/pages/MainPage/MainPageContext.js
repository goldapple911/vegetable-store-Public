import React from 'react';

const MainPageContext = React.createContext({
  navigationClosed: false,
  currentPromo: [],
  headerCircleRotation: 0,
  toggleNavigation: () => {},
  rotateHeaderCircle: () => {},
  contentPromo: [],
});

export default MainPageContext;