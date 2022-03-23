let dinero = 0;
let agregar = alert("Bienvenido a la tienda!");
let detalle = 0;


for (i = 0; i <= 8; i++) {
    agregar = prompt("Que item queres?");
    if (agregar == ""){
        alert("ERROR")
        dinero--;
    }
    dinero++;
    detalle = detalle + " ," + agregar
};

while (dinero < 10) {
    alert("Buena! Pero hay un minimo...");
    dinero++;
}

alert("Total a gastar = " + dinero + "$\nDetalle: items n° " + detalle + "\n \n \n \n Gracias!  -_-");
   