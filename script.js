document.addEventListener("DOMContentLoaded", function() {
    //Número de veces que hará click
    let veces = 0;
    
    //Botón
    const boton = document.createElement("BUTTON");
    boton.innerHTML = "Press here!";

    //Contenedor del botón
    const ctnBtn = document.createElement("DIV");
    this.body.appendChild(ctnBtn);
    ctnBtn.appendChild(boton);

    //Contenedor div del html
    const cont = document.querySelector(".contenedor");

    primeraImg();

    //Generando la primera imagen a mostrar
    function primeraImg() {
        cont.innerHTML = `
        <div class="nombre"></div>
        <div class="img"></div>
        <div class="descripcion"></div>
        `;
        document.querySelector(".nombre").innerHTML = "Gato!";
        document.querySelector(".img").innerHTML = '<img src="./img/1540970939593.jpg">';
        document.querySelector(".descripcion").innerHTML = "It's just a mystical cat!";
        veces++;
    }
    
    function mostrar() {
        if(veces == 1){
            document.querySelector(".nombre").innerHTML = "Dawg!";
            document.querySelector(".img img").src = "./img/164032374_1438014586537741_577884672692589354_n.jpg";
            document.querySelector(".descripcion").innerHTML = "It's just a sleepy dog!";
            veces++;
        } else if (veces == 2){
            veces = 0;
            primeraImg();
        }
    }

    boton.addEventListener("click", mostrar);
    
});
