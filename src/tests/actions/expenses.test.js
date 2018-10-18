import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })

  // Use toEqual to test for equality for objects and arrays
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})
