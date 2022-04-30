function adiciona() {
    let input = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefas')

    button.addEventListener('click', function () {
        let li = document.createElement('li');
        li.innerText = input.value
        li.className = 'lista'
        lista.appendChild(li)
        input.value = ""

    })
}
adiciona()

// function alteraBackground() {
//     let li = document.querySelector('.lista');
//     li.addEventListener('click', function(event) {
//         event.target.style.backgroundColor = 'gray'
//     })
// }
// alteraBackground()

function pintaDeCinza() {
    document.addEventListener('click', function (event) {
        let selected = document.querySelector('.selected');

        if (event.target.className == 'lista') {

            if (selected == null) {
                event.target.classList.add('selected')
            } else {
                selected.classList.remove('selected');
                event.target.classList.add('selected')
            }
        }
    })
}
pintaDeCinza()

function doubleClick() {

    document.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('lista')) {

            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed')
            } else {

                event.target.classList.add('completed');
            }
            // if(event.target.classList.indexOf('completed')< 0) {
            // event.target.classList.add('completed') 
            // }       
        }
    }
    )
}
doubleClick()

function apaga() {

    let butao = document.getElementById('apaga-tudo');
    butao.addEventListener('click', function () {
        let lista = document.getElementById('lista-tarefas');
        for (i = lista.childNodes.length - 1; i >= 0; i -= 1) {
            let filho = lista.childNodes[i];
            filho.remove();
        }
    })
}
apaga()

function removeFinalizados() {

    let butao = document.getElementById('remover-finalizados');
    butao.addEventListener('click', function () {
        let lista = document.getElementById('lista-tarefas');
        for (i = lista.childNodes.length - 1; i >= 0; i -= 1) {
            let filho = lista.childNodes[i];
            if (filho.classList.contains('completed')) {    
                filho.remove();
            }
        }
    })
}
removeFinalizados()

// function changeSelected(event) {
//     let selected = document.querySelector('.selected');
//     if (selected == null) {
//         event.target.classList.add('selected')
//     } else {
//         selected.classList.remove('selected');
//         event.target.classList.add('selected')
//     }
//     return console.log(selected)
// }

// let selected = document.querySelector('.selected')
// console.log(selected)