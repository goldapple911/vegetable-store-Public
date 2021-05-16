import { action, makeAutoObservable } from 'mobx';
import { getCatalogue } from '../api';
import {
  CatalogueCategory,
  Catalogue,
  ActiveItem,
  CatalogueItem,
  CatalogueItemVolume,
  ItemsFilters,
} from '../interfaces';
import {compact} from "lodash";

interface ICatalogueStore {
  catalogueCategories: CatalogueCategory[];
  selectedCataloguePage: string;
  catalogueLoading: boolean;
  catalogue: Catalogue | {};
  activeItem: ActiveItem | {};
  filteredCatalogueItems: CatalogueItem[];
}

class CatalogueStore implements ICatalogueStore {
  catalogueCategories = [];
  selectedCataloguePage = '';
  catalogueLoading = true;
  catalogue = {};
  activeItem = {};
  filteredCatalogueItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action loadCatalogue = (): void => {
    getCatalogue()
      .then(response => response.json())
      .then(data => {
        this.catalogueCategories = data.categories;
        this.catalogue = data.catalogue;
        this.catalogueLoading = false;
      })
  }

  @action selectCataloguePage = (page: string): void => {
    this.selectedCataloguePage = page;
  }

  @action selectActiveItem = (item: CatalogueItem | null): void => {
    if (item && item.isAvailable) {
      const newActiveItem: ActiveItem = {
        item: item,
        selectedVolume: item?.volumes[0],
      }
      this.activeItem = newActiveItem;
    } else {
      this.activeItem = {};
    }
  }

  @action changeActiveVolume = (volume: CatalogueItemVolume): void => {
    const newActiveItem: ActiveItem = {
      //@ts-ignore
      item: this.activeItem?.item,
      selectedVolume: volume,
    }
    this.activeItem = newActiveItem;
  }
  
  @action findMatchingItems = (currentFilters: ItemsFilters) => {
    let searchingCategories: string[];
    compact(currentFilters.filters).length
      ? searchingCategories = currentFilters.filters
      : searchingCategories = this.catalogueCategories.map((category: CatalogueCategory) => category.id)
    const itemName = currentFilters.name;
    
    let newFilteredItems: CatalogueItem[] = [];
    for (let category of searchingCategories) {
      // @ts-ignore
      const currentCategoryItems = this.catalogue[category];
      currentCategoryItems.map((item: CatalogueItem) => {
        const itemPrices = item.volumes.map((volume: CatalogueItemVolume) => volume.price1);

        const minPrice = Math.min.apply(null, itemPrices)
        const maxPrice = Math.max.apply(null, itemPrices)

        if (item.name.includes(itemName)
          && currentFilters.minPrice <= minPrice
          && currentFilters.maxPrice >= maxPrice) {
          newFilteredItems.push(item);
        }
      })
    }
    // @ts-ignore
    this.filteredCatalogueItems = newFilteredItems;
  }
}

const catalogueStore = new CatalogueStore;

export { catalogueStore };