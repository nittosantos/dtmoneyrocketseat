import Modal from 'react-modal';
import { Container, TransactionContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { NewTransactionModalProps } from './types';
import { api } from '../../services/api';

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [type, setType] = useState<string>('deposit');
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);

    setTitle('');
    setValue(0);
    setType('');
    setCategory('');
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
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
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
