const botaoExcluir = document.querySelector('#excluir-paciente');
botaoExcluir.addEventListener('click', function(event){
    event.preventDefault();
    let btnAtivoExcluir = document.querySelector('.btnTabela');
    let btnAtivoLimpar = document.querySelector('.limpaArray');
    const deletar = window.confirm(`Deseja Exluir o Paciente Selecionado?`);
    listaExclusao.map(function(item){
        if(deletar == true){
            item.classList.add('fadeOut');
            setTimeout(function(){
                item.remove();
            },500)}else{
                btnAtivoExcluir.removeAttribute('active','active');
                btnAtivoExcluir.setAttribute('disabled','disabled');
                btnAtivoLimpar.removeAttribute('active','active');
                btnAtivoLimpar.setAttribute('disabled','disabled');
                item.classList.remove('selecionaLinha');
                item.classList.add('cancelaSelecaoLinha');
                listaExclusao = [];
            };
        });
    });

tabela = document.querySelector('table');

const div = document.getElementById('btnExclusao');

let listaExclusao = [];

mostraBtnLimpar();


pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        let btnLimpaSelecao = document.querySelector('.limpaArray');
        botaoExcluir.removeAttribute('disabled','disabled');
        botaoExcluir.setAttribute('active','active');
        btnLimpaSelecao.removeAttribute('disabled','disabled');
        btnLimpaSelecao.setAttribute('active','active');
        event.target.parentNode.classList.remove('cancelaSelecaoLinha');
        event.target.parentNode.classList.add('selecionaLinha');
        listaExclusao.push(this);
    });
});

function mostraBtnLimpar(){
    let btnLimpaSelecao = document.createElement('button');
    btnLimpaSelecao.classList.add('limpaArray')
    btnLimpaSelecao.classList.add('btnTabela');
    btnLimpaSelecao.classList.add('btn');
    btnLimpaSelecao.classList.add('btn-warning');
    btnLimpaSelecao.setAttribute('disabled','disabled');
    btnLimpaSelecao.textContent = 'Limpar Seleção';
    div.appendChild(btnLimpaSelecao);
    
    btnLimpaSelecao.addEventListener('click', function(event){
        event.preventDefault();
        listaExclusao.map(function(item){
            botaoExcluir.removeAttribute('active','active');
            botaoExcluir.setAttribute('disabled','disabled');
            btnLimpaSelecao.removeAttribute('active','active');
            btnLimpaSelecao.setAttribute('disabled','disabled');
            item.classList.remove('selecionaLinha');
            item.classList.add('cancelaSelecaoLinha');
            listaExclusao = [];
        });
    });
}
