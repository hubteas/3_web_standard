let now = new Date();
console.log(now)

let specificDate = new Date(2024, 4, 5, 12, 30, 59, 129)
console.log(specificDate)

console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// set
// 면담하러가면한번씩사용해보세요
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString().slice(0,4));
console.log(now.toISOString());