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
  type: string,
  description: string,
  composition: string,
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

interface activeItem {
  item: catalogueItem,
  selectedVolume: catalogueItemVolume,
}

interface cartItem {
  item: activeItem,
  count: number,
}

interface pageInfo {
  name: string,
  href: string,
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
  selectedCataloguePage: any,
  catalogueLoading: boolean,
  catalogue: catalogueInterface,
  activeItem: activeItem,
  cartItems: cartItem[],
  currentPages: pageInfo[],
  toggleNavigation(): any,
  rotateHeaderCircle(): any,
  getMainPageMedia(): any,
  toggleScrollTop(): any,
  getCatalogue(): any,
  selectCataloguePage(id: string): any,
  selectActiveItem(item: any): any,
  changeActiveVolume(volume: any): any,
  addItemToCart(item: activeItem): any,
  removeItemFromCart(item: activeItem): any,
}

const PagesContext = React.createContext<appInterface | null>(null);

export default PagesContext;