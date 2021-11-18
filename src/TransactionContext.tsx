import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionContext = createContext<TransactionsContextData>(
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
