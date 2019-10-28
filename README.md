# Fibonacci-Tools

![](https://github.com/corydobson/workflows/CI/badge.svg)

This module provides helper functions for the Fibonacci sequence.

## Get the nth Number

```javascript
const {getNumber} = require('@bbq-beets/fib-tools')
assert.strictEqual(getNumber(8), 21)
```

## Get a List of Numbers

```javascript
const {getList} = require('@bbq-beets/fib-tools')
assert.strictDeepEqual(getList(8), [0, 1, 1, 2, 3, 5, 8, 13, 21])
```

## Get a Sequence of Numbers

```javascript
const {getSequence} = require('@bbq-beets/fib-tools')

const seq = getSequence()

for (const n of seq) {
  console.log(n) // The next Fibonacci number in the sequence
}
```
