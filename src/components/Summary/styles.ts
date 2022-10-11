import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 10px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 1100px) {
    overflow-x: auto;

    padding-bottom: 5px;

    ::-webkit-scrollbar {
      overflow-x: hidden;
      overflow-y: hidden;
      width: 20px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-600']};
      border-radius: 20px;
    }

    ::-webkit-scrollbar-button {
      border: 1px transparent;
    }
  }
`

interface SummaryCardProps {
  variant?: 'green' | 'red'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  min-width: 300px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    (props.variant === 'green' &&
      css`
        background: ${props.theme['green-700']};
      `) ||
    (props.variant === 'red' &&
      css`
        background: ${props.theme['red-700']};
      `)}
`
