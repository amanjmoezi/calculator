let displayBox  = document.querySelector(".display")
let list  = document.querySelectorAll(".show-display")
function showDisplay(e) {
    const inp = e.target.innerText
    if (displayBox.innerText == 0) {
        return displayBox.innerText = inp;
    }else
    {
        return displayBox.innerText += inp;
    }
} 
function calculate() {
    let result = displayBox.innerText;
    console.log(eval(result));
    return displayBox.innerText = eval(result);
}
function allClear() {
    
    return displayBox.innerText = "0";
}
function clearLast() {
    
    let display  =  displayBox.innerText;
    if (display.length == 1) {
        displayBox.innerText = "0";
    }else
    {
        displayBox.innerHTML = display.substring(0,display.length-1)
    }
}
document.querySelector(".calculate").addEventListener("click",calculate)
document.querySelector(".all-clear").addEventListener("click",allClear)
document.querySelector(".clear-last").addEventListener("click",clearLast)
list.forEach(element => {
    element.addEventListener("click",showDisplay)
});
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*8*8*8*