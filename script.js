let today = new Date();

let todayDate= document.querySelector('.todayDate');
todayDate.innerText = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();


let temps = document.querySelectorAll('.temp *, .inline-temp *, .temp, .inline-temp');

function showElements(){
    temps.forEach(e=>{
        e.classList.remove('temp');
        e.classList.remove('inline-temp');
        e.style.visibility ="visible";

    })
}


setTimeout(showElements, 2500);