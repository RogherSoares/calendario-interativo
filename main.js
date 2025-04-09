function colorirDia() {
    // Pegar o valor de campo dia
    let days = document.getElementById('day').value;

    //pegar valor do campo cor
    let color = document.getElementById('color').value;

    //pegar os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    //verificar se o campo de dia foi preenchido
    if (!days) {
        alert("Favor informar o dia");
    } else if ((days > 0) && (days <= 31)) {
        // se o numero de dias está no untervalo aplicara a cor na célula do calendário
        let td = calendar.getElementsByTagName('td')[parseInt(days) + 1];
        td.style.backgroundColor = color;
    } else {
        alert("Favor informar um dia do calendário");
    }
}