const personagens = document.querySelectorAll('.personagem');
console.log(personagens);
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter',()=> {

        if(window.innerWidt < 450 ) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGranede = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGranede.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaPersonagem = document.getElementById('descricao-personagem');
        descricaPersonagem.innerText = personagem.getAttribute('data-description');
    })
})