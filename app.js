// let's goooooooooo
let backBtn = document.querySelector(".container .scientific-btns .back-btn");
let scientificBtnBox = document.querySelector(".container .scientific-btns")

let lightModeBtn = document.querySelector(".container .input-box .toggle-btn #light-mode-btn")
let darkModeBtn = document.querySelector(".container .input-box .toggle-btn #dark-mode-btn")
let container = document.querySelector(".container")
let input = document.querySelector(".container .input-box input");
let result = document.querySelector(".container .input-box .result");
let allBtns = document.querySelectorAll(".container  .btn")


for (let item of allBtns){
    item.addEventListener("click",(e)=>{
        let btnText = e.target.innerHTML;
        if(btnText == "x"){
            btnText = '*';
        }
        input.value += btnText;
    })
}

let calculate =()=>{
    result.innerHTML = eval(input.value)
}



// let backspace =()=>{
//     input.value = input.value.substr(0, input.value.lenght - 1);
//     if(input.value == 0){
//         result.innerHTML = "0";
//     }
// }
function backspace() {
    // Get the input field element
    let inputField = document.querySelector('.user-input');
    
    // Get the current value of the input field
    let currentValue = inputField.value;
    
    // Remove the last character from the current value
    if (currentValue.length > 0) {
        inputField.value = currentValue.slice(0, -1);
    }
}



    // Scientific Functions
    function sin() {
        let inputField = document.querySelector('.user-input');
        let value = parseFloat(inputField.value);
        if (!isNaN(value)) {
            inputField.value = Math.sin(value).toFixed(4);
        } else {
            inputField.value = 'Error';
        }
    }

    function cos() {
        let inputField = document.querySelector('.user-input');
        let value = parseFloat(inputField.value);
        if (!isNaN(value)) {
            inputField.value = Math.cos(value).toFixed(4);
        } else {
            inputField.value = 'Error';
        }
    }

    function tan() {
        let inputField = document.querySelector('.user-input');
        let value = parseFloat(inputField.value);
        if (!isNaN(value)) {
            inputField.value = Math.tan(value).toFixed(4);
        } else {
            inputField.value = 'Error';
        }
    }

    function fact() {
        let inputField = document.querySelector('.user-input');
        let num = parseInt(inputField.value);
        if (!isNaN(num) && num >= 0) {
            let factorial = 1;
            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }
            inputField.value = factorial;
        } else {
            inputField.value = 'Error';
        }
    }

    function pi() {
        document.querySelector('.user-input').value = Math.PI.toFixed(4);
    }

    function log() {
        let inputField = document.querySelector('.user-input');
        let value = parseFloat(inputField.value);
        if (value > 0) {
            inputField.value = Math.log10(value).toFixed(4);
        } else {
            inputField.value = 'Error';
        }
    }

    function e() {
        document.querySelector('.user-input').value = Math.E.toFixed(4);
    }

    function pow() {
        let inputField = document.querySelector('.user-input');
        let value = inputField.value;
        let parts = value.split('^');
        if (parts.length === 2) {
            let base = parseFloat(parts[0]);
            let exponent = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(exponent)) {
                inputField.value = Math.pow(base, exponent).toFixed(4);
            } else {
                inputField.value = 'Error';
            }
        } else {
            inputField.value = 'Error';
        }
    }

    function root() {
        let inputField = document.querySelector('.user-input');
        let value = parseFloat(inputField.value);
        if (!isNaN(value) && value >= 0) {
            inputField.value = Math.sqrt(value).toFixed(4);
        } else {
            inputField.value = 'Error';
        }
    }

    // Attach event handlers for scientific buttons
    document.querySelectorAll('.scien-btn').forEach(button => {
        button.addEventListener('click', function () {
            let functionName = this.getAttribute('onclick').split('(')[0];
            if (typeof window[functionName] === 'function') {
                window[functionName]();
            }
        });
    }); 


backBtn.addEventListener("click",()=>{
    scientificBtnBox.classList.toggle("active")
} )



lightModeBtn.addEventListener("click",()=>{
    container.classList.add("light");
    lightModeBtn.style.display= "none"
    darkModeBtn.style.display ="block";

})

darkModeBtn.addEventListener("click",()=>{
    container.classList.remove("light");
    lightModeBtn.style.display = "block";
    darkModeBtn.style.display ="none";
    
})
 


let clearInput =()=>{
   input.value = '';
   result.innerHTML = 0 ;
}