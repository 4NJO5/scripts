//Variáveis Global do sistema
var input = document.getElementById('chute');
input.focus();

function sair(){
    window.location.href='./index.html';
}
function gameOver(){
    window.location.href='./game-over.html';
}

//Codigo de implemantação do DON2

        var numeroPensado = Math.round(Math.random() * 100);
        console.log(numeroPensado);
        var oportunidades = 3;
        var audioAcertou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/esta-fera.mp3');
        var audioErrou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/faustao-errou.mp3');
        var tentativas = 0;

    function comparar(){

            var chute = input.value;
            console.log(chute, tentativas);

            for(tentativas = 1; tentativas <= oportunidades; tentativas++){

                if( chute == numeroPensado ){

                    console.log(`Você acertou o Numero Pensado era ${numeroPensado}.`);
                    audioAcertou.play();
                    break;

                }else{

                    console.log(`Você chutou o numero ${chute} e errou na Tentativa ${tentativas}/${oportunidades}.`);
                    audioErrou.play();

                }
            //document.getElementById('chute').value = '';
            //document.getElementById('chute').focus();
            }
        setTimeout(gameOver,10000);
    }


    
