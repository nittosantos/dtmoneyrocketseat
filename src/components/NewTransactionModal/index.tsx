import Modal from 'react-modal';
import { Container, TransactionContainer, RadioBox } from './styles';
import { NewTransactionModalProps } from './types';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [type, setType] = useState<string>('deposit');
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
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Título' />

        <input placeholder='Valor' type='number' />

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

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
};
