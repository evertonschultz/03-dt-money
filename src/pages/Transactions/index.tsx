import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatted, priceFormatted } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionCard,
  TransactionCardFooter,
  TransactionCardInfo,
  TransactionContainer,
  TransactionsCard,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatted.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatted.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>

        <TransactionsCard>
          {transactions.map((transaction) => {
            return (
              <TransactionCard key={transaction.id}>
                <TransactionCardInfo>
                  <span>{transaction.description}</span>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatted.format(transaction.price)}
                  </PriceHighLight>
                </TransactionCardInfo>
                <TransactionCardFooter>
                  <div>
                    <TagSimple size={16} color="#7C7C8A" />
                    <span>{transaction.category}</span>
                  </div>
                  <div>
                    <CalendarBlank size={16} color="#7C7C8A" />
                    <span>
                      {dateFormatted.format(new Date(transaction.createdAt))}
                    </span>
                  </div>
                </TransactionCardFooter>
              </TransactionCard>
            )
          })}
        </TransactionsCard>
      </TransactionContainer>
    </div>
  )
}
