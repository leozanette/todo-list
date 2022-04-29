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
        if (event.target.className == 'lista') {
            event.target.style.backgroundColor = 'gray'
        }
    })
}

pintaDeCinza()