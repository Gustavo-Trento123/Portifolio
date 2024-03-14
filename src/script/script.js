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
                card.classList.remove('entrar');
                card.classList.add('sair');
            } else {
                setTimeout(function () {
                    engine.view.descricaoPaginaInicial.textContent = 'O meu conhecimento na área e habilidades profissionais!';
                    card.classList.remove('sair');
                    card.classList.add('entrar');
                }, 2000);
            }

        }
    });

    engine.view.opcaoProjetos.addEventListener('mouseover', function () {
        for (let i = 0; i <= 2; i++) {
            if (engine.view.descricaoPaginaInicial.classList.contains('entrar')) {
                card.classList.remove('entrar');
                card.classList.add('sair');
            } else {
                setTimeout(function () {
                    engine.view.descricaoPaginaInicial.textContent = 'Meu portifólio de Projetos!';
                    card.classList.remove('sair');
                    card.classList.add('entrar');
                }, 2000);
            }
        }
    });
}

function main() {
    alterarDescrição()
}

main();