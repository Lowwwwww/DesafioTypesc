let dataOriginal = new Date();
const padraoData = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
});


let diaAtual = dataOriginal.getDate();

diaAtual += 30;


let dataNova = new Date(dataOriginal);
dataNova.setDate(diaAtual);

console.log("Data vacinação: " + padraoData.format(dataOriginal));
console.log("Data Reforço: " + padraoData.format(dataNova));
document.write("data vacinação: " + padraoData.format(dataOriginal));
document.write("Data reforço: " + padraoData.format (dataNova));