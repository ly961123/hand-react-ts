import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ICity {
  id: number,
  name: string,
}

export const GlobalState = createContext({
  showToast: false,
  setShowToast: (() => {
    /* null */
  }) as Dispatch<SetStateAction<boolean>>,
  city: { id: 0, name: ''},
  setCity: (() => {
    /* null */
  }) as Dispatch<SetStateAction<ICity>>,
});

const { Provider } = GlobalState;

export default function ({ children }: any) {

  const [showToast, setShowToast] = useState(false);
  const [city, setCity] = useState({ id: 0, name: ''});
  const value = {
    showToast, setShowToast,
    city, setCity,
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}
