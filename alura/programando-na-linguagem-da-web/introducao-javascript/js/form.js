const botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    //console.log('Agora você tem controle sobre o botão');
    
    //Extraindo informacoes do form
    const form = document.querySelector('#form-adiciona');

    const paciente = obtemPacienteDoFormulario(form);

    //Cria a td e tr da tabela form
    const pacienteTr = montaTr(paciente);

    //Valida dados antes de inserir
    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErros(erros);
        return;
    }

    //Adiciona informacoes na tabela
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
    
});

titulo.addEventListener('click', function(){
    //console.log('Evento do Titulo :)');
}); //Função Anônima não precisa ser dado o nome para a função.. porém ela só poderá ser chamada dentro deste contexto

function exibeMensagensDeErros(erros){
    const ul = document.querySelector('#mensagens-erro');
    erros.foreEach(function(erro){
        const li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    
    const paciente = {
        
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    
    return paciente;
}

function montaTr(paciente){
    
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
        
    return pacienteTr;

    // const nomeTd = montaTd(paciente.nome,'info-nome')
    // nomeTd.textContent = paciente.nome;

    // const pesoTd = montaTd(paciente.peso, 'info-peso');
    // pesoTd.textContent = paciente.peso;

    // const alturaTd = montaTd(paciente.altura, 'info-altura');
    // alturaTd.textContent = paciente.altura;

    // const gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    // gorduraTd.textContent = paciente.gordura;

    // const imcTd = montaTd(paciente.imc, 'info-imc');
    // imcTd.textContent = paciente.imc;
    
    // console.log(nomeTd);
    // console.log(pesoTd);
    // console.log(alturaTd);
    // console.log(gorduraTd);
    
}

function montaTd(dado,classe){
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;    
}

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push('*O Peso é Inválido');
    }

    if(!validaAltura(paciente.altura)){
        erros.push('*A altrura é Inválida');
    }
    return erros;
}