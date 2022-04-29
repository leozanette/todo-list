function adiciona()  {
    let input = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefas')
   
    button.addEventListener('click', function(){
        let li = document.createElement('li');
        li.innerText = input.value
        lista.appendChild(li)
        input.value=""
        
    })
}
adiciona()