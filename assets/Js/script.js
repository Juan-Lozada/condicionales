let imagen = document.querySelector("#imagen");
let border = 0;

imagen.addEventListener("click", function(){
    if (border == 0){
        imagen.style.border="2px solid red";
        border = 1;
        console.log(border);
    }
    else {
        imagen.style.border="none";
        border = 0;
        console.log(border);
    }
});