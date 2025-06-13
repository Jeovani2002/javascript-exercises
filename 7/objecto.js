function botaoClicar(){
    document.body.style.backgroundColor = "yellow"
}

function clickDuplo(){
    document.getElementById("texto").innerHTML = "Voce clicou 2x"

}

function passarEncima(){
    let div = document.getElementById("texto")

    div.style.backgroundColor = "green"
}

function corAzul(){
    let div = document.getElementById("texto")

    div.style.backgroundColor = "blue"
}

function addText(){
    const p = document.getElementById("texto");
    p.append("Acionou texto");
}

function campoCheio(){
    document.getElementById("campoTexto").value = ""
}

function mudou(){
    console.log("Mudou")
}