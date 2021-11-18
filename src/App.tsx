import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './TransactionContext';

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
};
