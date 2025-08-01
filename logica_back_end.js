let array_amigos = []
let btn_add_amigo = document.getElementById('botao_add_amigo')

function adicionar_nome_lista() {
    
    let lista_amigo = document.getElementById('lista_amigo')
    let input_amigo = document.getElementById('nome_amigo').value
    
    if (!input_amigo) {
        alert("Digite algo no campo para adicionar")
    } else {
        array_amigos.push(input_amigo)
        console.log(array_amigos)
        // zerar a lista antes de entrar no loop, pq se não ia fica criando várias listas repetidas
        lista_amigo.innerHTML = ''
        
        for (let i = 0; i < array_amigos.length; i++) {
            const criar_li = document.createElement('li')
            criar_li.textContent = array_amigos[i]

            lista_amigo.appendChild(criar_li)
        }
    }

    document.getElementById('nome_amigo').value = ''
}

function sortear() {
    let numMaxSorteio = array_amigos.length
    let numSorteado = Math.round(Math.random() * numMaxSorteio)

    alert(`Amigo sorteado foi ${array_amigos[numSorteado]}`)
}