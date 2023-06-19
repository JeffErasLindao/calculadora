function funcionPredeterminada(){

        valorPorHora = parseInt(document.getElementById("valorPorHora").value);
        interfazHoras = parseInt(document.getElementById("interfazHoras").value);
        estructuraHoras = parseInt(document.getElementById("estructuraHoras").value);
        estilizacionHoras = parseInt(document.getElementById("estilizacionHoras").value);
        logicaHoras = parseInt(document.getElementById("logicaHoras").value);

        valorTotal = valorPorHora * (interfazHoras + estructuraHoras + estilizacionHoras + logicaHoras);

        const valor1 = document.getElementById("valorTotal");
        const valorNuevo = valor1.value;
        valor1.value = valorTotal;
}

/*const funcionPredeterminada = () => {

    
    document.getElementById("formulario").addEventListener("submit", (evento) => {


        evento.preventDefault();
        

        const valorPorHora = parseInt(document.getElementById("valorPorHora").value);
        const interfazHoras = parseInt(document.getElementById("interfazHoras").value);
        const estructuraHoras = parseInt(document.getElementById("estructuraHoras").value);

        const resultado = valorPorHora*(interfazHoras+estructuraHoras);

        document.getElementById("valorTotal").textContent = resultado;

    });
        

};*/


//funcionPredeterminada();