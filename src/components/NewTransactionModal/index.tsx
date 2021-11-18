import Modal from 'react-modal';
import { Container, TransactionContainer } from './styles';
import { NewTransactionModalProps } from './types';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
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
          <button type='button'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeImg} alt='Saida' />
            <span>Saida</span>
          </button>
        </TransactionContainer>

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
};
