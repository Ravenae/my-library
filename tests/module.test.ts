import { getRandomQuote } from '../src'
import { quotes } from '../src/citation'

test('it gets a random quote', () => {
  const randomQuote = getRandomQuote()
  expect(quotes).toContain(randomQuote)
})
