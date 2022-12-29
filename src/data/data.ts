import { createContext } from 'react';

export type ItemName = 'shop1' | 'shop2' | 'shop3' | 'shop4' | 'shop5' | 'shop6' | 'shop7' | 'shop8' | 'shop9';


export interface ItemProps {
  name: string;
  amount: number;
  baseCost: number;
  cost: number;
  perSec: number;
  itemMessages?: string[];
}

export interface ItemsProps extends Record<ItemName, ItemProps> {
  boughtItems?: ItemName[];
  count: {amount: number, perSec: number, perClick : number};
  clicks: number;
}

export const setItems = (items: ItemsProps): void =>{
  localStorage.setItem('items', JSON.stringify(items));
};

export interface DataContextType {
  items: ItemsProps;
  setItems: (items: ItemsProps) => void;
}

export const loveMessages= [
  ...(new Array(25).fill(null).map((_, i) => `Message ${i+1}`))
];

const startingItems: ItemsProps = {
  boughtItems: [],
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  shop1: { name: 'buy shop1', amount: 0, baseCost: 500, cost: 500, perSec: 0, itemMessages: loveMessages},
  shop5: { name: 'buy shop5', amount: 0, baseCost: 0, cost: 0, perSec: 0.2, itemMessages: loveMessages},
  shop3: { name: 'buy shop3', amount: 0, baseCost: 100, cost: 100, perSec: 1, itemMessages: loveMessages},
  shop2: { name: 'buy shop2', amount: 0, baseCost: 750, cost: 750, perSec: 5, itemMessages: loveMessages},
  shop4: { name: 'buy shop4', amount: 0, baseCost: 5000, cost: 5000, perSec: 69, itemMessages: loveMessages},
  shop8: { name: 'buy shop8', amount: 0, baseCost: 60000, cost: 60000, perSec: 180, itemMessages: loveMessages},
  shop6: { name: 'buy shop6', amount: 0, baseCost: 69420, cost: 69420, perSec: 750, itemMessages: loveMessages},
  shop7: { name: 'buy shop7', amount: 0, baseCost: 100000, cost: 100000, perSec: 4000, itemMessages: loveMessages},
  shop9: { name: 'buy shop9', amount: 0, baseCost: 30000000, cost: 30000000, perSec: 80085, itemMessages: loveMessages}
};

export const getItems = (): ItemsProps => {
  const storedItems = localStorage.getItem('items');
  return (storedItems) ? JSON.parse(storedItems) : startingItems;
};

export const DataContext = createContext<DataContextType>({
  items: getItems(),
  setItems: () => {
    // Intentionally left blank.
  }
});
