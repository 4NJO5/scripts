function sair(){
    window.location.href="./index.html"
}

var numeroPensado = Math.round(Math.random() * 100);
console.log(numeroPensado);
var audioAcertou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/esta-fera.mp3');
var audioErrou = new Audio('/alura/logicadeprogramacao/jogos/descubra-o-numero-2/media/faustao-errou.mp3');

function comparar(){

    var chute = document.getElementById('chute').value;
        console.log(chute);
    var tentativas = 0;
    var oportunidades = 3;

    for( tentativas = 1; tentativas <= oportunidades; tentativas++ ){

        if( chute == numeroPensado){
            audioAcertou.play();
            break;
        }else{        
            audioErrou.play();
        }
        document.getElementById('chute').value = "";
        document.getElementById('chute').focus();

    }

}