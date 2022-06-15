let valor1 = document.querySelector('#input-1').value;
let valor2 = document.querySelector('#input-2').value;
let valor3 = document.querySelector('#input-3').value;
let verificar = document.querySelector('#verificar');

verificar.addEventListener("click", function(){

    let total = valor1 + valor2 + valor3;
    let info = document.querySelector('#info');

    if (total <= 10){
        info.innerHTML = "Puedes llevar los Stickers."
    }
    else{
        info.innerHTML = "No puedes llevar mas de 10 stickers."
    }
});
