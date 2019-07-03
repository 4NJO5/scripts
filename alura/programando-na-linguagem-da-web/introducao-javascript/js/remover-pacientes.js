let tabela = document.querySelectorAll('table');

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.remove();
});


// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//         //console.log('Fui clicado com duplo click');
//         this.remove();
//     });
// });