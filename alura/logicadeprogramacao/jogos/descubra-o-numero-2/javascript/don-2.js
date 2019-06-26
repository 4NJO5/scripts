
//Variáveis Global do sistema


function sair(){
    window.location.href='./index.html';
}
function gameOver(){
    window.location.href='./game-over.html';
}

function sorteia(){
    return Math.round(Math.random() * 100);
}

function  criaInput(quantidade){

    var inputId = 0;

    for( inputId = 1;inputId <= quantidade; inputId++){
        var input = document.createElement('input');
        input.type = 'text';
        input.size = '30';
        input.id = `${inputId}`;
        input.placeholder = `Digite seu ${inputId}.º Chute de 0 a 100.`;
        document.getElementById('input').appendChild(input);
        document.write('<br><br>');
    }
}

function sorteiaNumeros(quantidade){
    
    var numerosPensado = [];
    var tentativas =1;
    
    while(tentativas <= quantidade){
        
        numerosPensado.push(sorteia());
        tentativas++;
        
    }
    return numerosPensado;
}

//Codigo de implemantação do DON2
var inputVezes = 3;
var input = criaInput(inputVezes);
var numerosPensado = sorteiaNumeros(inputVezes);
console.log(numerosPensado);
var oportunidades = inputVezes;
var audioAcertou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/esta-fera.mp3');
var audioErrou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/faustao-errou.mp3');
var tentativas = 0;

function comparar(){
    
    for(var posicao = 0; posicao <= numerosPensado.length; posicao++ || inputId++){
        var chute = document.getElementById(inputId).value;
        console.log(chute, tentativas);
        console.log(posicao);
        
        if( chute == numerosPensado[posicao]){
            
            var textoAcertou = document.createTextNode(`Você acertou os seus chutes estavam entre os numeros ( ${numerosPensado} ) que escolhi.`);
            document.getElementById('input').prepend(textoAcertou);
            audioAcertou.play();
            break;
            
        }else{
            
            console.log(`Você chutou o numero ${chute} e errou no ${tentativas}/${oportunidades}.`);
            audioErrou.play();
            
        }
        //document.getElementById('chute').value = '';
    }
    //document.getElementById('chute').focus();
}        
//Codigo de Escrita na DOM
const urlParametros = new URLSearchParams(window.location.search);
const nome = urlParametros.get('nome');
var bemVindo = document.createTextNode(`Olá, ${nome}.`); // Criar o nó de texto
document.getElementById('cabecalho').prepend(bemVindo); // Anexar o nó de texto ao elemento h2
var textoJogo = document.createTextNode(`Escolhi ${oportunidades} Números Aleatórios e Agora sua Função é Tentar Descobri-los em ${oportunidades} Chances.`);
document.getElementById('texto').prepend(textoJogo);
