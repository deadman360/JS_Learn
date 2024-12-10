
const sum = function (num1, num2, valor_def = 2) {
    return num1+num2+valor_def
}
const funcaoSeta = (num1, num = 2) => num1 + num
console.log(sum(1,2))
console.log(sum(1,2,5))
console.log(funcaoSeta(1,3))