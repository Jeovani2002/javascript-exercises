



//função soma
function soma(v1, v2){
    return v1 + v2;
}
//document.getElementById("texto").innerHTML = soma(10, 10);



//funções

function mult(v1, v2){
    return v1 * v2;

}
//document.getElementById("texto").innerHTML = mult(prompt(""),prompt(""));


/*function helloWordl(){
    alert("Ola mundo");
}

helloWordl();*/


//função paramétrica -> é uma variável 
function temperatura(fahr){
    return (5/9) * (fahr - 32);
}
//função factual -> é um valor real passado na função
var x = temperatura(77);
alert("A temperatura é de " + x + " celsius");