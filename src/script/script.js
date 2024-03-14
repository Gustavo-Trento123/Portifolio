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
        for (let i = 0; i <= 2; i++) {
            if (engine.view.descricaoPaginaInicial.classList.contains('entrar')) {
                engine.view.descricaoPaginaInicial.classList.remove('entrar');
                engine.view.descricaoPaginaInicial.classList.add('sair');
            } else {
                setTimeout(function () {
                    engine.view.descricaoPaginaInicial.textContent = 'O meu conhecimento na área e habilidades profissionais!';
                    engine.view.descricaoPaginaInicial.classList.remove('sair');
                    engine.view.descricaoPaginaInicial.classList.add('entrar');
                }, 2000);
            }

        }
    });

    engine.view.opcaoProjetos.addEventListener('mouseover', function () {
        for (let i = 0; i <= 2; i++) {
            if (engine.view.descricaoPaginaInicial.classList.contains('entrar')) {
                engine.view.descricaoPaginaInicial.classList.remove('entrar');
                engine.view.descricaoPaginaInicial.classList.add('sair');
            } else {
                setTimeout(function () {
                    engine.view.descricaoPaginaInicial.textContent = 'Meu portifólio de Projetos!';
                    engine.view.descricaoPaginaInicial.classList.remove('sair');
                    engine.view.descricaoPaginaInicial.classList.add('entrar');
                }, 2000);
            }
        }
    });
}

function main() {
    alterarDescrição()
}

main();