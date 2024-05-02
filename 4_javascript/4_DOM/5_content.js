// 표시되던말던 텍스트인 친구만 들고옴
console.log(document.getElementById('container').textContent)
// 화면에 표시되는 텍스트만 가져옴
console.log(document.getElementById('container').innerText)
// 해당노드의 컨텐츠 부분을 가져옴
console.log(document.getElementById('container').innerHTML)

let content = `<p>새롭게 추가해준 p태그 </p>`
document.getElementById('container').innerHTML = content;