import { action, makeAutoObservable } from 'mobx';
import { getMainPageMedia } from '../api';
import {
  TeamMember,
  PromoItem
} from '../interfaces';

interface IMainPageStore {
  currentPromo: PromoItem[],
  currentSlides: string[],
  contentPromo: PromoItem[],
  teamList: TeamMember[],
  currentShops: string[],
  mediaLoading: boolean,
}

class MainPageStore implements IMainPageStore {
  currentPromo = [];
  currentSlides = [];
  contentPromo = [];
  teamList = [];
  currentShops = [];
  mediaLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action loadMainPageMedia = (): void => {
    getMainPageMedia()
      .then(response => response.json())
      .then(data => {
        this.currentPromo = data?.promo;
        this.currentSlides = data?.slider;
        this.contentPromo = data?.content;
        this.teamList = data?.team;
        this.currentShops = data?.shops;
        this.mediaLoading = false;
      })
  }
}

const mainPageStore = new MainPageStore();

export { mainPageStore };