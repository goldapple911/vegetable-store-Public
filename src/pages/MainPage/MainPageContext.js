import React from 'react';

const MainPageContext = React.createContext({
  navigationClosed: false,
  currentPromo: [],
  toggleNavigation: () => {},
});

export default MainPageContext;