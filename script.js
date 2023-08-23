const tela = document.querySelector('.Resultado');
const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const submit = document.querySelector('.submit');

function formatar (mascara, document) {
    const x = document.value.length;
    const saida = mascara.substring(0,1);
    const text = mascara.substring(x);

    if (text.substring(0,1) != saida) {
        document.value += text.substring(0,1);
    };
}

submit.addEventListener('click', function(event){
    event.preventDefault();

    const alturaValue = altura.value;
    const pesoValue = peso.value;
    const imc1 = pesoValue / (alturaValue * alturaValue);
    const imc2 = imc1.toFixed(2);

    tela.textContent = imc2;
    tela.classList = 'style-tela';

    if (alturaValue === '' || pesoValue === '') {
        alert('Preencha os campos!');
        tela.textContent = 'Sem resultado!';
        tela.classList = 'text-error';
        altura.classList = 'error';
        peso.classList = 'error';
    };

    setTimeout(() => {
        tela.textContent = '';
        altura.classList = '';
        peso.classList = '';
    }, 5000)
    return;
});
