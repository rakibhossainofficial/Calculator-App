let inputbox = document.getElementById("inputBox");

let  button = document.querySelectorAll("button")

let string = "";

let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
       
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;

        }
        string += e.target.innerHTML;
        input.value = string
    })


})