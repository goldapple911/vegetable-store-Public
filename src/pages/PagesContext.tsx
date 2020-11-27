import React from 'react';

interface catalogueItemVolume {
  volume: string,
  price1: number,
  price2: number,
}

interface catalogueItem {
  name: string,
  volumes: catalogueItemVolume[],
  cover: string,
}

interface promoItem {
  name: string,
  cover: string,
  price: string,
  volume: string,
}

interface teamMember {
  name: string,
  photo: string,
}

interface catalogueCategory {
  name: string,
  cover: string,
  id: string,
}

interface catalogueInterface {
  forHair: catalogueItem[],
  forBody: catalogueItem[],
  forFace: catalogueItem[],
  relatedProducts: catalogueItem[],
  zeroWaste: catalogueItem[],
  forHome: catalogueItem[],
}

interface appInterface {
  navigationClosed: boolean,
  currentPromo: promoItem[], // TEST OPTION
  contentPromo: promoItem[], // TEST OPTION
  currentSlides: string[],
  headerCircleRotation: number,
  mediaLoading: boolean,
  teamList: teamMember[],
  currentShops: string[],
  filterItems: string[],
  catalogueCategories: catalogueCategory[],
  selectedCataloguePage: string,
  catalogueLoading: boolean,
  catalogue: catalogueInterface,
  toggleNavigation(): any,
  rotateHeaderCircle(): any,
  getMainPageMedia(): any,
  toggleScrollTop(): any,
  getCatalogue(): any,
  selectCataloguePage(id: string): any,
}

const PagesContext = React.createContext<appInterface | null>(null);

export default PagesContext;