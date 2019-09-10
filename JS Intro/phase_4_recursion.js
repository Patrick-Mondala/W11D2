range = function (start, end) {
  if (start > end ) return [];

  return [start].concat(range(start + 1, end));

}

// console.log(range(1,10));

sumRec = function (arr) {
  if (arr.length === 0) return 0;
  let first_num = arr.shift();
  return first_num+sumRec(arr);
}

// console.log(sumRec([1,2,3,4]))

exponent1 = function (base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

// console.log(exponent1(2, 3));

exponent2 = function (base, n) {
    if (n === 0) return 1;
    if (n === 1) return base;

    if (n % 2 === 0) {
        return exponent2(base, n/2) * exponent2(base, n/2)
    } else {
        return base * (exponent2(base, (n - 1) / 2) * exponent2(base, (n - 1) / 2))
    }
}

// console.log(exponent2(2,4)); even exponent
// console.log(exponent2(2,3)); odd exponent

fibonacci = function (n) {
    if (n <= 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1,1];
    let previous_fib = fibonacci(n - 1);
    return previous_fib.push(previous_fib[-1] + previous_fib[-2]);
}

console.log(fibonacci(5));