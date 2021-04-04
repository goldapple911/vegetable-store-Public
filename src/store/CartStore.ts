import { action, makeAutoObservable } from 'mobx';
import { CartItem, ActiveItem, OrderInfo } from '../interfaces';
import {find, indexOf, isEqual} from 'lodash';

class CartStore {
  cartItems: CartItem[] = [];
  totalCost: number = 0;
  packAsPresent: boolean = false;
  orderInfo: OrderInfo | null = null;
  sendToPVZ: boolean = false;
  addressPVZ: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addItemToCart = (item: ActiveItem) => {
    let newCartItems;
    const currentCartItem = find(this.cartItems, (cartItem: CartItem) => {
      return isEqual(cartItem.item, item)
    })
    if (currentCartItem) {
      newCartItems = [...this.cartItems]
      const index = indexOf(this.cartItems, currentCartItem);
      const newItem = {
        item: currentCartItem.item,
        count: currentCartItem.count + 1,
      };
      newCartItems.splice(index, 1, newItem);
    } else {
      const newCartItem = {
        item: item,
        count: 1,
      }
      newCartItems = [...this.cartItems, newCartItem];
    }
    this.cartItems = newCartItems;
    this.calculateTotalCost()
  }

  @action
  removeItemFromCart = (item: ActiveItem, difference: number) => {
    let newCartItems;
    const currentCartItem = find(this.cartItems, (cartItem: CartItem) => {
      return isEqual(cartItem.item, item)
    })
    // @ts-ignore
    if (currentCartItem?.count > 1 && difference === 1) {
      newCartItems = [...this.cartItems]
      const index = indexOf(this.cartItems, currentCartItem);
      const newItem = {
        item: currentCartItem?.item,
        // @ts-ignore
        count: currentCartItem?.count - 1,
      };
      // @ts-ignore
      newCartItems.splice(index, 1, newItem);
    }
    else if (currentCartItem?.count === 1 || difference > 1) {
      newCartItems = [...this.cartItems]
      const index = indexOf(this.cartItems, currentCartItem);
      newCartItems.splice(index, 1);
    }
    this.cartItems = newCartItems || []
    this.calculateTotalCost()
  }

  @action
  togglePackAsPresent = () => {
    this.packAsPresent = !this.packAsPresent
    this.calculateTotalCost()
  }

  @action
  calculateTotalCost = () => {
    let totalCost = 0;
    this.cartItems.map((item: CartItem) => {
      let item3Count = 0;
      for (let i = item.count; i/3 >= 1; i -= 3) {
        item3Count += 1;
      }
      const item1Count = item.count - item3Count * 3;
      totalCost += item3Count * item.item.selectedVolume.price3 + item1Count * item.item.selectedVolume.price1
    })
    if (this.packAsPresent) totalCost += 300;
    this.totalCost = totalCost;
  }

  @action
  saveOrderInfo = (newInfo: OrderInfo) => {
    this.orderInfo = newInfo;
  }

  @action
  selectSendToPVZ = (newStatus: boolean) => {
    this.sendToPVZ = newStatus;
  }

  @action
  updateAddressPVZ = (addressPVZ: string) => {
    this.addressPVZ = addressPVZ;
  }
}

const cartStore = new CartStore();

export { cartStore };