let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '='){  // logic for "=" operator
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C'){ //logic for C button
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC'){ //logic for AC button
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})