import sum from '../__mocks__/sum.js'
// this test will always pass.
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})