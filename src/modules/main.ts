// const displayValue = document.getElementById('show_screen') as HTMLInputElement;

// document.addEventListener('keyup', e => {
//     if (e.keyCode >= 96 && e.keyCode <= 111 && e.keyCode !== 108) {
//         displayValue.value += e.key
//     } else if (e.keyCode == 13) {
//         calculator('=')
//     } else if (e.keyCode == 8)
//         calculator('<-')
// })

// document.addEventListener('click', e => {
//     const elemento = e.target

//     if (elemento.getAttribute('id') === 'valor') { calculator('valor', elemento.textContent) }
//     if (elemento.getAttribute('id') === 'C') { calculator('C') }
//     if (elemento.getAttribute('id') === '<-') { calculator('<-') }
//     if (elemento.getAttribute('id') === '=') { calculator('=') }
// })

// function calculator(tipo, valor) {
//     if (tipo === 'valor') {  document.getElementById('show_screen').value += valor }
//     if (tipo === 'C') { displayValue.value = '' }
//     if (tipo === '=') {
//         const resultado = eval(displayValue.value)
//         displayValue.value = resultado
//     }
//     if (tipo === '<-') { displayValue.value = displayValue.value.slice(0, -1)} //Remove last caractere
// }


/*
    Tabela Keycode JS:
    0 - 96
    1 - 97
    2 - 98
    3 - 99
    4 - 100
    5 - 101
    6 - 102
    7 - 103
    8 - 104
    9 - 105
    multi - 106
    adicao - 107
    menos - 109
    ponto - 110
    divsao - 111
    enter - 13
    backspace - 8
    virgula - 108
*/