const {getNumber, getList, getSequence} = require('../index')

describe('getList', () => {
  test('returns [0] for the 0th number sequence', () => {
    expect(getList(0)).toEqual([0])
  })

  test('returns [0, 1] for the 1st number sequence', () => {
    expect(getList(1)).toEqual([0, 1])
  })

  test('returns a list for the nth number sequence', () => {
    expect(getList(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
  })
})

describe('getNumber', () => {
  test('returns 0 for the 0th number', () => {
    expect(getNumber(0)).toBe(0)
  })

  test('returns 1 for the 1st number', () => {
    expect(getNumber(1)).toBe(1)
  })

  test('returns the nth fibonacci number', () => {
    expect(getNumber(8)).toEqual(21)
  })
})

describe('getSequence', () => {
  test('returns a generator starting with 0 when no index is provided', () => {
    expect.assertions(5)

    const sequence = getSequence()
    const expected = [0, 1, 1, 2, 3]
    let idx = 0

    for (const number of sequence) {
      expect(number).toBe(expected[idx])
      idx++
      if (idx > 4) break
    }
  })

  test('returns a generator starting the provided start', () => {
    expect.assertions(5)

    const sequence = getSequence(2)
    const expected = [1, 2, 3, 5, 8]
    let idx = 0

    for (const number of sequence) {
      expect(number).toBe(expected[idx])
      idx++
      if (idx > 4) break
    }
  })
})
