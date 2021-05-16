export interface TeamMember {
  name: string,
  photo: string,
}

export interface PromoItem {
  name: string,
  cover: string,
  price: string,
  volume: string,
}

export interface CatalogueItemVolume {
  volume: string,
  price1: number,
  price3: number,
}

export interface CatalogueItem {
  name: string,
  volumes: CatalogueItemVolume[],
  cover: string,
  type: string,
  description: string,
  composition: string,
  isAvailable: boolean
}

export interface CatalogueCategory {
  name: string,
  cover: string,
  id: string,
}

export interface Catalogue {
  forHair: CatalogueItem[],
  forBody: CatalogueItem[],
  forFace: CatalogueItem[],
  relatedProducts: CatalogueItem[],
  soap: CatalogueItem[],
  forHome: CatalogueItem[],
}

export interface ActiveItem {
  item: CatalogueItem,
  selectedVolume: CatalogueItemVolume,
}

export interface ItemsFilters {
  name: string,
  minPrice: number,
  maxPrice: number,
  filters: string[],
}

export interface CartItem {
  item: ActiveItem,
  count: number,
}

export enum OrderInfoProperty {
  fullName = 'fullName',
  country = 'country',
  cityName = 'cityName',
  streetName = 'streetName',
  homeNumber = 'homeNumber',
  sectionId = 'sectionId',
  flatNumber = 'flatNumber',
  postalCode = 'postalCode',
  phoneNumber = 'phoneNumber',
  email = 'email',
}

export type DataField = {
  value: string,
  placeholder: string,
  required: boolean,
}

export type OrderInfo = {
  [key in OrderInfoProperty]?: DataField;
}

