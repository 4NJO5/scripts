//Inicio do código javascript
const titulo = document.querySelector('.titulo');
titulo.textContent = 'Anderson dos Anjos Silva';

const subTitulo = document.querySelector('.sub-titulo');
subTitulo.textContent = 'Anderson dos Anjos Silva';
//console.log(subTitulo);

    let pacientes = document.querySelectorAll('.paciente');
        
        for( let i = 0; i < pacientes.length; i++){
            
            const paciente = pacientes[i];
            
            const tdPeso = paciente.querySelector('.info-peso');
            const peso = tdPeso.textContent;
            //console.log(pacientes);
            //console.log(tdPeso);
            //console.log(peso);
            
            const tdAltura = paciente.querySelector('.info-altura');
            const altura = tdAltura.textContent;
            //console.log(tdAltura);
            //console.log(altura);
            
            const tdImc = paciente.querySelector('.info-imc');
            let pesoValido = validaPeso(peso);
            let alturaValida = validaAltura(altura);
            
            
            if(!pesoValido){
                console.log('peso inválido');
                pesoValido = false;
                tdImc.textContent = 'Peso Inválido';
                paciente.classList.add('paciente-invalido');
                //console.log(tdImc.textContent);
            }
            
            if(!alturaValida){
                console.log('altura inválida');
                alturaValida = false;
                tdImc.textContent = 'Altura Inválida';
                paciente.classList.add('paciente-invalido');
                //console.log(tdImc.textContent);
            }
            
            if( alturaValida && pesoValido ){

                const imc = calculaImc(peso,altura);
                tdImc.textContent = imc;
                //console.log(tdImc);
                //console.log(imc);
            }
            
        }


    function validaPeso(peso){

        if(peso >= 0 && peso < 1000){
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura){

        if(altura >= 0 && altura <= 3.0){
            return true;
        }else{
            return false;
        }
    }

    function calculaImc(peso,altura){
   
        let imc = 0;

        imc = peso /( altura * altura );
    return parseFloat(imc.toFixed(2));
}
