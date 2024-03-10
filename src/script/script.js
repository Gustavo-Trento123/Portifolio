engine = {
    view: {
        descricaoPaginaInicial: document.getElementById('descricoes'),
        opcaoSobreMim: document.getElementById('sobreMim'),
        opcaoFormacoes: document.getElementById('formacoes'),
        opcaoCompetencias: document.getElementById('competencias'),
        opcaoProjetos: document.getElementById('projetos')
    },
    values: {

    },
}

function alterarDescrição() {
    engine.view.opcaoSobreMim.addEventListener('mouseover', function () {
        engine.view.descricaoPaginaInicial.textContent = 'Veja um resumo rápido sobre mim e minha carreira profissional!';
    });/* Altera o 'sobre mim' */

    engine.view.opcaoFormacoes.addEventListener('mouseover', function () {
        engine.view.descricaoPaginaInicial.textContent = 'Onde estudei, coisas que aprendi e mais!';
    });/* Altera o 'competências */

    engine.view.opcaoCompetencias.addEventListener('mouseover', function () {
        engine.view.descricaoPaginaInicial.classList.add('sair');
        setTimeout(function() {
            engine.view.descricaoPaginaInicial.classList.remove('sair');
            engine.view.descricaoPaginaInicial.classList.add('entrar');}
        ,2000)
        

        engine.view.descricaoPaginaInicial.textContent = 'O meu conhecimento na área e habilidades profissionais!';
    });

    engine.view.opcaoCompetencias.addEventListener('mouseover', function () {
        setTimeout(function() {
            engine.view.descricaoPaginaInicial.classList.remove('sair');
            engine.view.descricaoPaginaInicial.classList.add('entrar');}
        ,2000)
        
        engine.view.descricaoPaginaInicial.textContent = 'O meu conhecimento na área e habilidades profissionais!';
    });

    engine.view.opcaoProjetos.addEventListener('mouseover', function () {
        setTimeout(function() {
            engine.view.descricaoPaginaInicial.classList.remove('sair');
            engine.view.descricaoPaginaInicial.classList.add('entrar');}
        ,2000)
        
        engine.view.descricaoPaginaInicial.textContent = 'Meu portifólio de Projetos!';
    });
}

function main() {
    alterarDescrição()
}

main();