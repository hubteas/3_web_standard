// 가장 먼저 찾는게 우선
// const element = document.querySelector('.container');
// console.log(element)

var element = document.querySelector('.container');
console.log(element)

var element = document.querySelectorAll('.container');
console.log(element)
console.log(element[0].children)

var element = document.querySelectorAll('.container .text')
console.log(element)