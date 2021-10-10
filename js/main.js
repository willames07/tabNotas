const tabela = document.querySelector(".table-notas")
const nomeUser = document.getElementById('aluno')
const priNotaUser = document.getElementById('nota1')
const segNotaUser = document.getElementById('nota2')
const terNotaUser = document.getElementById('nota3')
const btn = document.getElementById('btn-enviar')

let nome;
let priNota;
let segNota;
let terNota;
let mensagem;


btn.addEventListener("click", function play (){

    dadosInput()

    let total = ((priNota + segNota + terNota)/3).toFixed(2)
    if(total < 6 ){
        mensagem = 'reprovado'
    }else {
        mensagem = 'aprovado'
    }

    let tr = document.createElement('tr');
    tr.classList.add('aluno')
    tr.innerHTML =`<td> ${nome} </td> <td> ${priNota} </td> <td> ${segNota} </td> 
    <td> ${terNota} </td> <td> ${total} </td> <td class="mensagem"> ${mensagem} </td>`

    tabela.appendChild(tr)

    atualizarCamp()
});

const dadosInput = ()=> {

    nome = nomeUser.value
    priNota = Number(priNotaUser.value)
    segNota = Number(segNotaUser.value)
    terNota = Number(terNotaUser.value)

}

const atualizarCamp = ()=> {

    nomeUser.value = " "
    priNotaUser.value = " "
    segNotaUser.value = " "
    terNotaUser.value = " "
}