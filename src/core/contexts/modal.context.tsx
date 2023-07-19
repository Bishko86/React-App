import React, { createContext, useState, useMemo, useCallback } from 'react';

import { ModalProviderProps } from 'core/interfaces';

const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => { },
  closeModal: () => { }
});

const ModalProvider: React.FC<ModalProviderProps> = ({ children }): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  
  const contextValue = useMemo(() => ({ isModalOpen, openModal, closeModal }), [isModalOpen, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
