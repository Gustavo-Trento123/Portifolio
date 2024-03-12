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
    });/* Altera o 'formações */

    engine.view.opcaoCompetencias.addEventListener('mouseover', function () {
        setTimeout(function() {
            if(engine.view.descricaoPaginaInicial.classList.contains('sair')){
                engine.view.descricaoPaginaInicial.classList.remove('sair');
                engine.view.descricaoPaginaInicial.classList.add('entrar');
            }else{
                engine.view.descricaoPaginaInicial.classList.remove('entrar');
                engine.view.descricaoPaginaInicial.classList.add('sair');
            }}
        ,500)
        
        engine.view.descricaoPaginaInicial.textContent = 'O meu conhecimento na área e habilidades profissionais!';
    });/* Altera o cométencias */

    engine.view.opcaoProjetos.addEventListener('mouseover', function () {
        setTimeout(function() {
            if(engine.view.descricaoPaginaInicial.classList.contains('sair')){
                engine.view.descricaoPaginaInicial.classList.remove('sair');
                engine.view.descricaoPaginaInicial.classList.add('entrar');
            }else{
                engine.view.descricaoPaginaInicial.classList.remove('entrar');
                engine.view.descricaoPaginaInicial.classList.add('sair');
                engine.view.descricaoPaginaInicial.classList.remove('sair');
                engine.view.descricaoPaginaInicial.classList.add('entrar');
            }}
        ,500)
        
        engine.view.descricaoPaginaInicial.textContent = 'Meu portifólio de Projetos!';
    });
}

function main() {
    alterarDescrição()
}

main();