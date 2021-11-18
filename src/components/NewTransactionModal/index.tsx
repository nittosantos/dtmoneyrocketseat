import Modal from 'react-modal';
import { Container } from './styles';
import { NewTransactionModalProps } from './types';

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
};
