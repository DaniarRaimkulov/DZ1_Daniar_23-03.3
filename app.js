const innInput = document.querySelector('#innInput'),
    innCheck = document. querySelector('#innCheck'),
    innResult = document. querySelector( '#innResult');

const regExp = /^\d{4} \d{4} \d{4}$/

innCheck.onclick = () => {
    if(regExp.test(innInput.value)){
        innResult.innerHTML = "OK"
        innResult.style.color= "green"
    }else{
        innResult.innerHTML = "NOT"
        innResult.style.color= "red"
    }
}

const block = document.getElementById('block');
let pos = 0;
let direction = 1;
const moveBlock = () => {
    if (pos > 450 || pos < 0) {
        direction = -direction;
    }
    pos += direction * 10;
    block.style.left = `${pos}px`;
    setTimeout(moveBlock, 50);
};
moveBlock();
