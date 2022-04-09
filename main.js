let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = 'Xatolik!'
                }
                break;
            default:
                display.innerHTML += e.target.innerText
        }
        if(display.innerText.length>11){
            display.innerText = 'Katta raqam!'
        }
        console.log(display.innerText.length);
    })
})
