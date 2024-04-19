function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("O que você faz no necroterio no horario de almoço?");

    
    if (respostaTime.toLowerCase() === "toco berimbau") {
      alert("você sendo horroroso");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}