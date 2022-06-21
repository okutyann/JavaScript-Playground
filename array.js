let array = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

array.push(1100)
console.log(array)

console.log(array.pop())
console.log(array.slice(3, 6))
console.log(array.length)

let i = 0
const foeaforEach1ch1 = array.forEach(
    (item) => {
        array[i] = item + 10
        i++
    }
)
console.log(array)

const map1 = array.map(
    (item) => {
       return item * 2
    }
);
console.log(map1)

const filter1 = array.filter((item) => {
    return item > 500
});
console.log(filter1)