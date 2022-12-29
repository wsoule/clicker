import { Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import {
  DataContext,
  getItems,
  ItemsProps,
  setItems as setStoredItems
} from './data/data';
import { Clicker, DisplayItems, ItemContainer } from './items/index';
import { theme } from './theme';


function App() : JSX.Element {
  const [open, setOpen] = useState(true);
  const onClose = (): void => {
    setOpen(false);
  };
  const [items, setStateItems] = useState(getItems());
  const setItems = (newItems: ItemsProps): void => {
    setStateItems(newItems);
    setStoredItems(newItems);
  };
  const refreshRate = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStateItems((items) => {
        const newItems = {
          ...items,
          count : {
            ...items.count,
            amount : items.count.amount + items.count.perSec * (refreshRate / 1000)
          }
        };

        setStoredItems(newItems);

        return newItems;
      });
    }, refreshRate);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{'MODAL MESSAGE'}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DataContext.Provider value={{ items, setItems }}>
        <div className='container'>
          <Clicker />
          <div className='parent-div'>
            <ItemContainer itemName='shop1' />
            <ItemContainer itemName='shop2' />
            <ItemContainer itemName='shop3' />
            <ItemContainer itemName='shop4' />
            <ItemContainer itemName='shop5' />
            <ItemContainer itemName='shop6' />
            <ItemContainer itemName='shop7' />
            <ItemContainer itemName='shop8' />
            <ItemContainer itemName='shop9' />
          </div>
          <DisplayItems />
        </div>
      </DataContext.Provider>
    </ChakraProvider>
  );
}

export default App;
