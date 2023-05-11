// const phoneInput = document.querySelector('#gmailInput')
// const phoneCheck = document.querySelector('#gmailCheck')
// const phoneResult = document.querySelector('.gmailResult')
//
// const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//
// phoneCheck.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green'
//     }else {
//         phoneResult.innerHTML = 'NOT OK'
//         phoneResult.style.color = 'red'
//     }
// }
//2hw
const miniBox = document.querySelector('.miniBox')
let position = 0;
const moveBox = () => {
    position ++;
    miniBox.style.left = `${position}px`
    if (position < 270){
        moveBox();
    }
}
miniBox.addEventListener('click', () => {
    moveBox()
})
