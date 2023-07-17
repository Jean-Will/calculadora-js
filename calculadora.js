function soma(){

}



function guardaValor(valorDigitado){
   
   
setValueDisplay(valorDigitado);
    if(document.getElementById ("valor1").value==""){
        
       setValueValor1(valorDigitado);
    }else{
        
        
        
        setValuevalor2(valorDigitado);
    }
    
}

function guardaOperacao(operacaoDigitada){
    setValueDisplay(operacaoDigitada);
    setValueOperacao(operacaoDigitada);
}

function calcular(){
 
 var valor1=parseInt (document.getElementById ("valor1").value);
 var valor2=parseInt (document.getElementById ("valor2").value);
 var operacao=document.getElementById("operacaoDigitada").value;
 if(operacao=='+'){
    setValueDisplay(valor1+valor2);
    
 }

if(operacao=='*'){
    multiplicar(valor1, valor2);
}
if(operacao=='/'){
    divisao(valor1 , valor2);
}
    if(operacao=='-'){
    subtracao(valor1 , valor2);
    }
}

function multiplicar(valor1 , valor2){

       setValueDisplay(valor1*valor2);
    
}

function divisao (valor1 , valor2) {
    setValueDisplay(valor1/valor2);
}

function subtracao(valor1 , valor2) {
    setValueDisplay(valor1-valor2);
}

function setValueDisplay(valorfinal){
    document.getElementById ("displayValue").innerHTML=valorfinal;
}

function apagar(){
    setValueDisplay("");
    setValueValor1("");
    setValuevalor2("");
    setValueOperacao("");
}

function setValueValor1(valor){
    document.getElementById ("valor1").value=valor;
        
}
function setValuevalor2(valor){
    document.getElementById("valor2").value=valor;
}

function setValueOperacao(operacao){
    document.getElementById("operacaoDigitada").value=operacao;
}

