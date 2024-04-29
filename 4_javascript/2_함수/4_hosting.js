test();
function test(){
    console.log('이 함수..호이스팅될까')
}

// test2();
// console.log(test2) -> undefined
// 함수가 객체에 담기기 전에 변수가 호이스팅이 됐을 뿐.
var test2 = function(){
    console.log('이녀석은 될까')
}