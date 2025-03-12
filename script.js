function logar(){
    // alert("chipi")
    nome = document.getElementById("nome").value
    senha = document.getElementById("senha").value
    if(nome == "admin" && senha == "1234"){
        alert("Bem vindo " + nome)
        window.location.href = "page.html";
    }
}

function calcular(){
    nota1 = parseFloat(document.getElementById("nota1").value)
    nota2 = parseFloat(document.getElementById("nota2").value)
    nota3 = parseFloat(document.getElementById("nota3").value)
    nota4 = parseFloat(document.getElementById("nota4").value)
    // alert(nota1)
    // alert(nota2)
    // alert(nota3)
    // alert(nota4)
    mediaValor = (nota1 + nota2 + nota3 + nota4) / 4
    media = document.getElementById("media").innerHTML = `A média entre ${nota1}, ${nota2}, ${nota3} e ${nota4} é igual a ${mediaValor}`
    if(mediaValor < 7){
        document.getElementById("mensagem").innerHTML = "Você foi reprovado!"
    } else {
        document.getElementById("mensagem").innerHTML = "Você foi aprovado!"
    }
}