import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    display: none;
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};

  @media (max-width: 900px) {
    font-size: 20px;
    font-weight: bold;
  }
`

export const TransactionsCard = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1.5rem;
  }
`

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  width: 100%;

  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  gap: 12px;
`

export const TransactionCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TransactionCardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    align-items: center;
    gap: 5px;
    padding: 0 5px;

    > span {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
