module.exports = {
  getList,
  getNumber,
  getSequence
}

/**
 * Get a list up to the `nth` integer in the Fibonacci sequence (inclusive).
 *
 * @param {number} nth The number to get a list up to (inclusive)
 * @returns {Array<number>}
 */
function getList(nth) {
  if (nth === 0) return [0]
  return getList(nth - 1).concat(getNumber(nth))
}

/**
 * Get the `nth` integer in the Fibonacci sequence.
 *
 * @param {number} nth A number indicating which number in the sequence to
 * calculate (zero-based)
 * @returns {number}
 */
function getNumber(nth) {
  if (nth === 0) return 0
  if (nth === 1) return 1

  return getNumber(nth - 1) + getNumber(nth - 2)
}

/**
 * Get a generator starting with `start` that yields Fibonacci numbers.
 *
 * @generator
 * @param {number} [start=0] A number to start the sequence at
 * @yield {number} The next number in the sequence
 */
function* getSequence(start = 0) {
  while (true) yield getNumber(start++)
}
