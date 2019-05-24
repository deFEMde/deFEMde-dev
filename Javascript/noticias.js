// jquery dos botões "leia mais"//
let novaJanela
$('#bntInfoI').click(function () {
    novaJanela = window.open('https://bit.ly/2When8t', '_blank');
    if (novaJanela) {

    } else {
        alert("Desabilite o bloqueador de Pop-ups");
    }
});

$('#bntInfoII').click(function () {
    novaJanela = window.open('https://bit.ly/2VQ4wlO', '_blank');
    if (novaJanela) {

    } else {
        alert("Desabilite o bloqueador de Pop-ups");
    }
});

$('#bntInfoIII').click(function () {
    novaJanela = window.open('https://bit.ly/2K11f0K', '_blank');
    if (novaJanela) {

    } else {
        alert("Desabilite o bloqueador de Pop-ups");
    }
});
//fim do jquery dos botões "leia mais"//

//Inicio do botão de voltar// 
$().click(function(){
    window.history.back
});


