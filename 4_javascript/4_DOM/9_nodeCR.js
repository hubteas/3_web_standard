// 요소노드생성하기
let el = document.createElement('div');
el.innerText = '류호근!'
// document.body.appendChild(el);

let childNodes = document.body.childNodes;
childNodes.forEach((node)=>{
    if(node.nodeName ==='A'){
        node.parentNode.removeChild(node)
    }//nodeName = 태그네임을 가져오는것. 무조건 대문자로 반환
})