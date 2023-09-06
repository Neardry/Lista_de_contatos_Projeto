const form = document.getElementById('formulario');
const nomeEntrada = document.getElementById('nomeEntrada');
const numeroEntrada = document.getElementById('numeroEntrada');
const Numeros = [];
let linhas = '';

function adicionaLinhas() {
    if(Numeros.includes(numeroEntrada.value)) {
        alert('Este numero ja foi adicionado')
    }else{
    Numeros.push(numeroEntrada.value);
    let linha = '<tr>';
    linha += `<td>${nomeEntrada.value}</td>`;
    linha += `<td>${numeroEntrada.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    nomeEntrada.value = '';
    numeroEntrada.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
})