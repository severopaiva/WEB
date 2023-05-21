// Corpos  das  Funções

function lervetor (vet) {
	for (i=0; i<vet.length; i++) {
                        vet [i] = prompt ("Digite componente: ");
	}
}

function exibevetor (vet) {
	for (i=0; i<vet.length; i++) {
                       document.write("Componente [",  i,"]: ", vet[i],"<br>"); }
}

function maior (vet) { 
     return (Math.max(...vet));
}

function menor (vet) { 
     return (Math.min(...vet));
}

function meumaior (vet) {
   maximo = -999;
   for (i=0; i<vet.length; i++) {
         if (vet [i] > maximo)  {
            maximo = vet [i]; }
    }
return (maximo); 
}		           	  	  		  	

function bolha(vet) {
    for (i=0; i<vet.length-1; i++) {
         for (j=i+1;j<vet.length; j++) {
               if (vet [i] > vet [j]) {
                    aux = vet [i];
	 vet [i] = vet [j];
                    vet[j] = aux; }
          }
     }
     return (vet); 
}


//Programa Principal
document.write("Execução Programa Principal: ","<br><br>");
var vetor = [0,0,0,0,0 ];
lervetor (vetor);
exibevetor(vetor);
document.write("O maior elemento é: ",maior (vetor),"<br>");
document.write("O menor elemento é: ",menor (vetor),"<br>");
document.write("O maior meu é: ",meumaior (vetor),"<br>");
document.write("Vetor classificado: ", bolha (vetor),"<br>");

document.write("<br> Finalização de Execução Programa Principal: ");

