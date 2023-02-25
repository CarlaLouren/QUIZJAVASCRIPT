

function respostaQuiz(resultado) {
    const res=document.getElementById('res')
    if (resultado == 'SP') {
        res.innerHTML = 'Muito bem, você acertou a capital'

    } else {

    res.innerHTML = 'Infelizmente você não acertou, tente mais uma vez'


    }

}