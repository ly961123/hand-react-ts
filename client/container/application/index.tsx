import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export const GlobalState = createContext({
  showToast: false,
  setShowToast: (() => {
    /* null */
  }) as Dispatch<SetStateAction<boolean>>,
});

const { Provider } = GlobalState;

export default function ({ children }: any) {

  const [showToast, setShowToast] = useState(false);
  const value = {
    showToast, setShowToast,
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}
