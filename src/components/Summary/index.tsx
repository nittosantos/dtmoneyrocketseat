import incomingImg from '../../assets/income.svg';
import outcomingImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

export const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomingImg} alt='Entradas' />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomingImg} alt='Saídas' />
        </header>
        <strong> - R$500,00</strong>
      </div>
      <div className='highlight_background'>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
};
