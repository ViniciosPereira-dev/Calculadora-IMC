//Constantes
const form = document.getElementById('form');

//Eventos

form.addEventListener("submit", function(e){
  
    e.preventDefault(); // impede que a pagina seja carregada ao clilcar no botão

    const peso = parseFloat(document.getElementById('peso').value); // Pega o valor atual

    const altura = parseFloat(document.getElementById('altura').value);  // Cada vez que o usuário clica em submit, pega o valor atual do campo

    //Calculo IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor_imc');
    let descricao = "";

    document.getElementById("info").classList.remove("hidden");

    valor.classList.add('atencao');

    //Condições
    if(imc < 18.5){
        descricao = "Abaixo do peso!";
    }else if(imc >= 18.5 && imc < 25){
        
        descricao = "Normal";
        valor.classList.remove('atencao');
        valor.classList.add('normal');

    }else if(imc >= 25 && imc < 30){
        descricao = "Acima do peso";
    }else if(imc >= 30 && imc <= 35){
        descricao = "Cuidado! Voçê está com Obesidade moderada!"
    }else if(imc >= 35 && imc <= 40){
        descricao = "Cuidado! Voçê está com Obesidade severa"
    }else{
        descricao = "Cuidado! Obesidade Morbida"
    }

    valor.textContent = imc.replace(".",",");
    document.getElementById('descricao').textContent = descricao
     
})

//Funções
