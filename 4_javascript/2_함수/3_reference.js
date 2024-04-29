let a = 10;
const b = 20;

function test(){
    // let a = 50;
    a = 50;
    console.log(`함수내부 a : ${a}`);
    console.log(`함수내부 b : ${b}`);
}
test();
console.log(`함수외부 a : ${a}`);
console.log(`함수외부 b : ${b}`);

