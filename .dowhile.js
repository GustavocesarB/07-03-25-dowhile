function contador() {//Declara  função "Contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado"
const tempo =  new Date(); //Declaração da Variável "tempo" somente leitura, a qual receberá o objeto "Date" do JavaScript
    setTimeout(contador, 1000);
    let hora =  tempo.getHours(); //Declaração da variável "hora" temporária, aqual receberá o retorno do método "getHours"
    let minutes = tempo.getMinutes();
    let seconds = tempo.getSeconds();

    if (document.getElementById("cbxMarcarTempo").checked == true){ //if é uma condição que está vendo se o CbxMarcarTempo está chekado (marcado)
        document.getElementById("span_hora").innerText = hora; // irá pegar o elemento hora e irar inserir um texto (hora)
        document.getElementById("span_Minutes").innerText = minutes; // irá pegar o elemento minutes e irar inserir um texto (minutos)
        document.getElementById("span_Seconds").innerText = seconds; // irá pegar o elemento seconds e irar inserir um texto (seconds)
    }
    setInterval(contador, 1000); //essa linha conta apenas conta 1 segundo    
    if (document.getElementById("cbxMarcarTempo").checked == false){ //if é uma condição que está vendo se o CbxMarcarTempo está chekado (marcado), como o if é falso não irá inserir texto na tela 
        document.getElementById("span_hora").innerText = "";
        document.getElementById("span_Minutes").innerText = "";
        document.getElementById("span_Seconds").innerText = "";
        clearInterval(); // irá zerar todos os setIntervals
    } 
}

document.getElementById("cbxMarcarTempo").addEventListener('click', () => { // addEventListener está Adicionando na linha de eventos do javaS o evento click do obejto cbxmarcartempo
    contador();
});
