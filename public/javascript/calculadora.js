const funcionPredeterminada = () =>{

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit',(evento)=>{

        evento.preventDefault();

        const valorPorHora = document.getElementById('valorPorHora').value;
        const interfazHoras = document.getElementById('interfazHoras').value;
        const estructuraHoras = document.getElementById('estructuraHoras').value;

        const resultado = parseInt(valorPorHora*(parseInt(interfazHoras)+parseInt(estructuraHoras)));

        document.getElementById('estructuraHoras').textContent = resultado;


    })


};


funcionPredeterminada();