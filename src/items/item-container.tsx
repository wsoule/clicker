import { BuyItem } from './index';
import { DataContext, ItemName } from '../data/data';
import { FC, useContext } from 'react';



import './item-container.css';

export interface ItemContainerProps {
  itemName : ItemName
}

export const ItemContainer: FC<ItemContainerProps> = ({ itemName }) => {
  const { items } = useContext(DataContext);
  const item = items[itemName];
  const media = {
    backgroundSize : '100% 100%',
    backgroundRepeat : 'no-repeat'
  };
  const perSecMessage = (item.name === items.shop1.name) ?
    <p className='item-persec'>+ {items.count.perClick + 1} per click</p>
    :
    <p className='item-persec'>per sec: {item.perSec}</p>;

  return (
    <div className='child-div' style={media} >
      <p className='item-name'>{item.name}</p>
      <p className='item-count'>count: {item.amount}</p>
      {perSecMessage}
      <BuyItem itemName={itemName} number={1} />
    </div>
  );
};

