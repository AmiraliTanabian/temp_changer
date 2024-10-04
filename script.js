const result = document.querySelector('#result')
const input = document.querySelector('#temp-input')
const mainBtn = document.querySelector('#enter')
const resetBtn = document.getElementById('reset')
const  mainTitle = document.querySelector('#mian-title')
const changeModeBtn = document.querySelector('#mode-changer')
let resultValue
let isCtoF = true

mainBtn.addEventListener('click', function (){
    result.style.display = 'block'
    if (isCtoF) {
        resultValue = (+input.value * (9 / 5)) + 32
        result.innerHTML = resultValue + ' F'

    }
    else{
        resultValue = (+input.value - 32) * (5/9)
        result.textContent = resultValue + ' °C'
    }
})

resetBtn.addEventListener('click', function (){
    input.value = ''
    result.style.display = 'none'
})

changeModeBtn.addEventListener('click', function (){
    if (isCtoF){
        isCtoF = false
        changeModeBtn.innerHTML = ' فارنهایت به سلسیوس'
        mainTitle.innerHTML = ' تبدیل دما از فارنهایت به سلسیوس'
        input.setAttribute('placeholder', ' F')

    }
    else{
        isCtoF = true
        changeModeBtn.innerHTML = 'سلسیوس به فارنهایت'
        mainTitle.innerHTML = ' تبدیل دما از سلسیوس به فارنهایت'
        input.setAttribute('placeholder', ' °C')
    }
})