// Corpos  das  Funções

function lervetor (vet) {
	for (i=1; i<vet.length; i++) {
                  vet [i] = prompt ("Digite componente ", i);
	}
}

function exbirvetor (vet) {
	for (i=1; i<vet.length; i++) {
                 document.write("Componente: ",  i, vet[i],"<br>"); }
}


//Programa Principal
document.write("Execução Programa Principal: ","<br><br>");
var vetor = [0,0,0,0,0 ];
lervetor (vetor);
exibevetor(vetor);
document.write("<br> Finalização de Execução Programa Principal: ");

