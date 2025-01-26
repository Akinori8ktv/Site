document.getElementById('Error').addEventListener('click', function () {
    document.getElementById('titulo').innerText = "Poxa, tudo bem ento :(";
    const titulo = document.getElementById('titulo');
    titulo.style.color = "red";


    // time pra sair  voltar//
    setTimeout(function () {
        document.getElementById('titulo').innerText = "Aceita a flor? Rs";
        titulo.style.color = "white";
    }, 3000); // 3000 ms = 3 segundos
});