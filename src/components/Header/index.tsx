import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { HeaderProps } from './types';

export const Header = ({ onOpenTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dt money' />
        <button type='button' onClick={onOpenTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};
