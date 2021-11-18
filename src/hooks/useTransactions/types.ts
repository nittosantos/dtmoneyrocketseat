import { ReactNode } from 'react';

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export type TransactionsProviderProps = {
  children: ReactNode;
};

export type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};
