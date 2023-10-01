const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        
        const botaoselect = document.querySelector('.botao.selecionado')
        const personagemselect = document.querySelector('.personagem.selecionado')

        botaoselect.classList.remove('selecionado')
        personagemselect.classList.remove('selecionado')

        botao.classList.add('selecionado')
        personagens[i].classList.add('selecionado')

    })
})