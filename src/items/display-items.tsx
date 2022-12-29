import { FC, useContext } from 'react';
import { DataContext, ItemName } from '../data/data';
import './display-items.css';
import hugImg from '../img/hug.png';
import dateImg from '../img/date.png';
import flowerImg from '../img/flower.png';
import childImg from '../img/child.png';
import vacationImg from '../img/vacation.png';
import handHoldImg from '../img/handHold.png';
import dancingImg from '../img/dance.png';
import showeringImg from '../img/shower.png';


const switchFunc = (item: ItemName): string => {
  switch (item) {
    case 'shop1':
      return hugImg;
    case 'shop2':
      return flowerImg;
    case 'shop3':
      return handHoldImg;
    case 'shop4':
      return dateImg;
    case 'shop5':
      return dancingImg;
    case 'shop6':
      return vacationImg;
    case 'shop7':
      return '';
    case 'shop8':
      return showeringImg;
    case 'shop9':
      return childImg;
  }
};

export const DisplayItems: FC = () => {
  const { items } = useContext(DataContext);

  return (
    <div className='items-pics-box'>
      {  items.boughtItems?.map((item: ItemName) => {
        return <img className='images-in-box' height='30px' width='30px' src={switchFunc(item)} />;
      })}
    </div>

  );
};
