// █ ============ Calculate Number   ========== █


let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});


// █ ============ Copy Text   ========== █

function copyText() {
    var input = document.getElementById("inputBox");
    input.select();
    document.execCommand("copy");

    var popup = document.getElementById("popup");
    popup.classList.add("show");

    setTimeout(function() {
      popup.classList.remove("show");
    }, 2000); // Pop-up will disappear after 2 seconds
}


