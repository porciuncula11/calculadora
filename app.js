//tipo = ação ou valor
//valor =representação textual dp botão
function calcular(tipo, valor){
    //console,log(tipo, valor)
    console.log(tipo, valor)
    if(tipo === 'acao'){
        //limpar o campo
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        if(valor === '+'|| valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor 
        }

        if(valor === '='){
            let valor_campo = eval(document.getElementById('resultado').value)
            documento.getElementById('resultado').value = valor_campo
        }

    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor 
    }
}