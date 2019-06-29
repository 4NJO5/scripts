//Inicio do código javascript
const titulo = document.querySelector('.titulo');
titulo.textContent = 'Anderson dos Anjos Silva';

const subTitulo = document.querySelector('.sub-titulo');
subTitulo.textContent = 'Anderson dos Anjos Silva';
//console.log(subTitulo);

const pacientes = document.querySelectorAll('.paciente');
const colorFont = 'yellow';
const colorBackground = 'red';


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
    let pesoValido = true;
    let alturaValida = true;

    
    if( peso <= 0 || peso >= 800 ){
        console.log('peso inválido');
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido';
        paciente.classList.add('paciente-invalido');
        //console.log(tdImc.textContent);
    }
    
    if(altura <= 0 || altura >= 3.00){
        console.log('altura inválida');
        alturaValida = false;
        tdImc.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido');
        //console.log(tdImc.textContent);
    }

    if( alturaValida && pesoValido ){
    
        const imc = parseFloat(peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
        //console.log(tdImc);
        //console.log(imc);
    }

}

const botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    //console.log('Agora você tem controle sobre o botão');

    const addForm = document.querySelector('#form-adiciona');
    const addNome = addForm.nome.value;
    const addPeso = addForm.peso.value;
    const addAltura = addForm.altura.value;
    const addGordura = addForm.gordura.value;

    const pacienteTr = document.createElement('tr');

    const nomeTd = document.createElement('td');
    const pesoTd = document.createElement('td');
    const alturaTd = document.createElement('td');
    const gorduraTd = document.createElement('td');
    const imcTd = document.createElement('td');

    console.log(addNome);
    console.log(addPeso);
    console.log(addAltura);
    console.log(addGordura);

    nomeTd.textContent = addNome;
    pesoTd.textContent = addPeso;
    alturaTd.textContent = addAltura;
    gorduraTd.textContent = addGordura;

    console.log(nomeTd);
    console.log(pesoTd);
    console.log(alturaTd);
    console.log(gorduraTd);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd);

    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

});

titulo.addEventListener('click', function(){
    console.log('Evento do Titulo :)');
}); //Função Anônima não precisa ser dado o nome para a função.. porém ela só poderá ser chamada dentro deste contexto

