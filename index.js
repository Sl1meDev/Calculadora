document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i <= 9; i++) {
        let button = document.querySelector(".btn-" + i);
        if (button) {
            button.addEventListener("click", function () {
                document.querySelector(".result").textContent += button.textContent;
            });
        }
    }
    var operacoes = ['plus','minus','divide','multiple','power']
    for (let i = 0; i <= 4; i++) {
        let button = document.querySelector('.btn-' + operacoes[i]);
        if (button) {
            button.addEventListener('click', function() {
                document.querySelector(".result").textContent += button.textContent;
            });
        }
    }
    document.querySelector('.btn-igual').addEventListener('click', async function() {
        const result = document.querySelector(".result");
    
        for (let i = 0; i < 9; i++) {
            for (let i = 0; i < 3; i++) {
                result.textContent = "Carregando" + ".".repeat(i + 1);
                await new Promise(resolve => setTimeout(resolve, 500)); // Espera 500ms antes de mudar
            }
        }
    
        result.textContent = "Já existe um usuario com essa conta!!";
    });
});