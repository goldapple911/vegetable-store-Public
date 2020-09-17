import React from 'react';

const MainPageContext = React.createContext({
  navigationClosed: false,
  toggleNavigation: () => {},
});

export default MainPageContext;