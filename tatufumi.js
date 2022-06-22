let bankMoney
let stockMoney
let allMoney
let stockCount

const bank = (bankMoney,stockMoney) => {
   return bankMoney + stockMoney
}


allMoney = bank(520000,7000000)


const stock = (allMoney) => {
   return (allMoney / 10000)
}
stockCount = stock(allMoney)
console.log(stockCount)