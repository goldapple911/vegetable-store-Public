import React from 'react';

interface pageInfo {
  name: string,
  href: string,
}

interface appInterface {
  navigationClosed: boolean,
  headerCircleRotation: number,
  currentPages: pageInfo[],
  toggleNavigation(): any,
  rotateHeaderCircle(): any,
  toggleScrollTop(): any,
  togglePackAsPresent(): any,
}

const PagesContext = React.createContext<appInterface | null>(null);

export default PagesContext;