let findFiboMemoiz = function() {
    let cache = {};
    return function findFiboRecurcion(number, result, count) {
        if (cache[number]) {
            console.log('ergfr')
            console.log(cache)
            return cache[number];
        }
        result = result || [0, 1];
        count = count || 0;
        let start = result[result.length - 2];
        let stop = result[result.length - 1];
        let sum = start + stop;
        if (count < number - 1) {
            result.push(sum);
            return findFiboRecurcion(number, result, ++count);
        } 
        return cache[number] = result;
    }
}
let func = findFiboMemoiz()

let factorialMemoiz = function() {
    let cache = [];
    return function factRecursiya(num, count, result) {
        if (cache[num]) {
            console.log(cache)
            return cache[num];
        }
        result = result || [1, 1];
        count = count || 2;
        if (typeof result[num] == 'undefined') {
            result.push((result[result.length - 1]) * count);
            return factRecursiya(num, ++count, result);
        }
        cache = result;
        return cache[num];
    }
}

let func2 = factorialMemoiz()
