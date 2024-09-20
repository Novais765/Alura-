document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function () {
            const atual = document.querySelector('.ativo');
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(proximoPassoId);

            // Verifica se o próximo passo existe antes de avançar
            if (proximoPasso) {
                atual.classList.remove('ativo');
                proximoPasso.classList.add('ativo');
            }
        });
    });
});
