const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const ol = document.querySelector('#lista-tarefas');

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

function pintaDeCinza() {
    let local = document.getElementById('list-local');
    local.addEventListener('click', function (event) {
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

function doubleClick() {
    let local = document.getElementById('list-local');
    local.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('lista')) {

            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed')
            } else {

                event.target.classList.add('completed');
            }     
        }
    }
    )
}

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

let storage = localStorage.getItem('storage');
if(storage) {
    document.getElementById('lista-tarefas').innerHTML = storage
}

function salvarTarefas() {
    let butao = document.getElementById('salvar-tarefas');
    let lista = document.getElementById('lista-tarefas');
    butao.addEventListener('click', function() {
        localStorage.setItem('storage',lista.innerHTML)
    })
}

function removeSelecionado() {
    let butao = document.getElementById('remover-selecionado');
    butao.addEventListener('click', function () {
        let lista = document.querySelector('.selected');  
                lista.remove();
    })
}

function trocarPosicao(array, de, para) {
    array.splice(para,0,array.splice(de,1)[0]);
    array.forEach(li => {
        ol.appendChild(li);
    });
    return array;
}

function moverLi(operacao) {
  const arrayLi = document.querySelectorAll('li');
  console.log(arrayLi);
  const arrayValue = Object.values(arrayLi);
  console.log(arrayValue);
  const itens = arrayValue.findIndex((item) => item.classList.contains('selected'));
    console.log(itens);
    if (itens === -1) {
        return alert('Error, voce nao selecionou nenhuma tarefa') 
    }

    const to = operacao === '+' ? itens -1 : itens + 1;
    trocarPosicao(arrayValue, itens, to);
}

moveUp.addEventListener('click', () => moverLi('+'));
moveDown.addEventListener('click', () => moverLi('-'));


adiciona()
pintaDeCinza()
doubleClick()
apaga()
removeFinalizados()
salvarTarefas()
removeSelecionado()