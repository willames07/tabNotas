const tabela = document.querySelector(".table-notas")
const nomeUser = document.getElementById('aluno')
const priNotaUser = document.getElementById('nota1')
const segNotaUser = document.getElementById('nota2')
const terNotaUser = document.getElementById('nota3')
const indexDelete = document.getElementById('id-remover')
const btn = document.getElementById('btn-enviar')
const btnRemover = document.getElementById('remover') // -> botton para remover o ultimo item da table

let position =0;
let nome;
let priNota;
let segNota;
let terNota;
let mensagem;
let total;
let listAluno;



btn.addEventListener("click", function play (){
   
    if( nomeUser.value === " " || priNotaUser.value === " " || segNotaUser.value === " " || terNotaUser.value === " " ){

        window.alert("preencha todos os campos")
        listAluno[0].innerHTML = ` `;        

    }else {

        dadosInput()

        total = ((priNota + segNota + terNota)/3).toFixed(2)
        if(total < 6 ){
            mensagem = 'reprovado'
        }else {
            mensagem = 'aprovado'
        }

        position += 1;
        let tr = document.createElement('tr');
        tr.classList.add('aluno')
        tr.innerHTML =`<td class="position"> ${position} </td> <td> ${nome} </td> <td> ${priNota} </td> <td> ${segNota} </td> 
        <td> ${terNota} </td> <td> ${total} </td> <td class="mensagem"> ${mensagem} </td>`
    
        tabela.appendChild(tr)

        atualizarCamp()

    }

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

// REMOVER TR

btnRemover.addEventListener('click', ()=> {

    let indexAluno = indexDelete.value - 1
    listAluno = document.querySelectorAll('tr.aluno')


    listAluno[indexAluno].innerHTML = ` `;


    atualizarCampRe()
    atualizarPosition()

});

function atualizarCampRe () {

    indexDelete.value = " "

}

const atualizarPosition = ()=> {

    let listPosition = document.querySelectorAll('.position')

    for( let cont = 0; cont < listPosition.length; cont++ ){

        listPosition[cont].innerHTML = ` ${cont + 1} `

    }

}