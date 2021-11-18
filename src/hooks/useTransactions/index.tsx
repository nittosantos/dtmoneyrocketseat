import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
  Transaction,
  TransactionsContextData,
  TransactionsProviderProps,
  TransactionInput,
} from './types';

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (TransactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...TransactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  return context;
};
