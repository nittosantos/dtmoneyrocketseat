import styled from 'styled-components';
import { SummaryProps } from './types';

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
};

export const Container = styled.div<SummaryProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight_background {
      color: #fff;
      background: ${({isNegative}) => (isNegative ? colors.red : colors.green)}
    }
  }
`;
