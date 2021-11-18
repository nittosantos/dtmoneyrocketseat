import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionModalProps } from './types';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>('deposit');
  const [category, setCategory] = useState<string>('');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react_modal_overlay'
      className='react_modal_content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react_modal_close'
      >
        <img src={closeImg} alt='Fechar Modal' />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder='Valor'
          type='number'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saida' />
            <span>Saida</span>
          </RadioBox>
        </TransactionContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
};
