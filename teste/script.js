
function escolha1() {
    document.getElementById("story").innerHTML = "Você ouve um barulho assustador atrás de você. O que você faz?";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha3()'>Correr para longe</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha4()'>Investigar o barulho</button>";
  }
  
  function escolha2() {
    document.getElementById("story").innerHTML = "Você decide voltar para casa e nunca mais voltar à floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha3() {
    document.getElementById("story").innerHTML = "Você corre o mais rápido que pode, mas acaba se perdendo na floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha4() {
    document.getElementById("story").innerHTML = "Você se aproxima do barulho e encontra uma figura sombria.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha5()'>Conversar com a figura</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha6()'>Fugir o mais rápido possível</button>";
  }
  
  function escolha5() {
    document.getElementById("story").innerHTML = "A figura sombria revela ser um espírito vingativo que te assombra para sempre.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha6() {
    document.getElementById("story").innerHTML = "Você foge aterrorizado e nunca mais retorna à floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha7()'>Esconder-se em uma caverna próxima</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha8()'>Subir em uma árvore alta</button>";
  }
  
  function escolha7() {
    document.getElementById("story").innerHTML = "Você entra na caverna e encontra um antigo altar assustador.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha9()'>Investigar o altar</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha10()'>Sair da caverna e continuar fugindo</button>";
  }
  
  function escolha8() {
    document.getElementById("story").innerHTML = "Você sobe na árvore e fica quieto, esperando que a figura sombria passe.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha11()'>Descer da árvore e procurar uma rota de fuga</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha12()'>Ficar na árvore até amanhecer</button>";
  }
  
  function escolha9() {
    document.getElementById("story").innerHTML = "Ao tocar o altar, você é consumido por uma força maligna e nunca mais é visto.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha10() {
    document.getElementById("story").innerHTML = "Você sai da caverna e continua correndo desesperadamente, procurando uma saída.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha13()'>Encontrar uma velha cabana abandonada</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha14()'>Seguir um caminho misterioso que aparece à frente</button>";
  }
  
  function escolha11() {
    document.getElementById("story").innerHTML = "Você desce da árvore e começa a procurar uma rota de fuga pela floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha15()'>Seguir o som de um riacho próximo</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha16()'>Seguir as pegadas misteriosas no chão</button>";
  }
  
  function escolha12() {
    document.getElementById("story").innerHTML = "Você permanece na árvore até amanhecer, quando a figura sombria desaparece.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha17()'>Descer da árvore e voltar para casa</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha18()'>Explorar a floresta agora que está clara</button>";
  }
  
  function escolha13() {
    document.getElementById("story").innerHTML = "A cabana abandonada está cheia de objetos estranhos e sinistros.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha19()'>Investigar os objetos</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha20()'>Sair da cabana e seguir em frente</button>";
  }
  
  function escolha14() {
    document.getElementById("story").innerHTML = "Você segue o caminho misterioso e acaba encontrando um portal para outra dimensão.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha21()'>Curiosidade te leva a entrar no portal</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha22()'>Sair correndo antes que seja tarde demais</button>";
  }
  
  function escolha15() {
    document.getElementById("story").innerHTML = "Você segue o som do riacho e encontra uma ponte suspeita.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha23()'>Atravessar a ponte com cuidado</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha24()'>Procurar outra rota para atravessar o riacho</button>";
  }
  
  function escolha16() {
    document.getElementById("story").innerHTML = "Você segue as pegadas misteriosas e descobre um tesouro escondido.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha25()'>Pegar o tesouro e tentar escapar</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha26()'>Deixar o tesouro e continuar fugindo</button>";
  }
  
  function escolha17() {
    document.getElementById("story").innerHTML = "Você desce da árvore e volta para casa, aliviado por ter escapado.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha18() {
    document.getElementById("story").innerHTML = "Você decide explorar a floresta agora que está clara, em busca de respostas.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha27()'>Seguir as trilhas no chão</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha28()'>Procurar por pistas nas árvores</button>";
  }
  
  function escolha19() {
    document.getElementById("story").innerHTML = "Ao investigar os objetos, você acidentalmente liberta uma entidade maligna.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha20() {
    document.getElementById("story").innerHTML = "Você sai da cabana e continua seguindo em frente, determinado a sair da floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha29()'>Procurar por sinais de civilização</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha30()'>Confiar na sua intuição e seguir um caminho desconhecido</button>";
  }
  
  function escolha21() {
    document.getElementById("story").innerHTML = "Sua curiosidade te leva a entrar no portal, e você é aprisionado em outra dimensão para sempre.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha22() {
    document.getElementById("story").innerHTML = "Você corre o mais rápido possível, deixando o portal para trás.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha31()'>Procurar ajuda para fechar o portal</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha32()'>Ignorar o portal e continuar fugindo</button>";
  }
  
  function escolha23() {
    document.getElementById("story").innerHTML = "Você atravessa a ponte com cuidado, mas ela desmorona no meio do caminho.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha24() {
    document.getElementById("story").innerHTML = "Você procura outra rota para atravessar o riacho e encontra uma passagem segura.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha33()'>Seguir em frente pela passagem</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha34()'>Voltar e procurar por outra saída</button>";
  }
  
  function escolha25() {
    document.getElementById("story").innerHTML = "Ao pegar o tesouro, você é amaldiçoado e se torna parte do tesouro para sempre.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha26() {
    document.getElementById("story").innerHTML = "Você deixa o tesouro para trás e continua fugindo, priorizando sua segurança.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha35()'>Procurar por um esconderijo seguro</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha36()'>Continuar correndo sem parar</button>";
  }
  
  function escolha27() {
    document.getElementById("story").innerHTML = "Seguindo as trilhas, você encontra um antigo cemitério assombrado.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha37()'>Explorar o cemitério</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha38()'>Evitar o cemitério e seguir em frente</button>";
  }
  
  function escolha28() {
    document.getElementById("story").innerHTML = "Você procura por pistas nas árvores e encontra um mapa antigo.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha39()'>Seguir o mapa para uma saída</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha40()'>Ignorar o mapa e confiar na sua intuição</button>";
  }
  
  function escolha29() {
    document.getElementById("story").innerHTML = "Você procura por sinais de civilização e encontra uma estrada movimentada.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha30() {
    document.getElementById("story").innerHTML = "Você confia na sua intuição e segue um caminho desconhecido, na esperança de encontrar uma saída.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha41()'>Seguir uma trilha sinistra</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha42()'>Procurar por uma clareira para se orientar</button>";
  }
  
  function escolha31() {
    document.getElementById("story").innerHTML = "Você encontra ajuda para fechar o portal, mas acaba libertando uma força ainda mais perigosa.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function escolha32() {
    document.getElementById("story").innerHTML = "Você ignora o portal e continua fugindo, decidindo não se arriscar novamente.";
    document.getElementById("story").innerHTML += "<br><button onclick='escolha43()'>Buscar abrigo em uma casa abandonada</button>";
    document.getElementById("story").innerHTML += "<button onclick='escolha44()'>Seguir um caminho desconhecido</button>";
  }
  
  function escolha33() {
    document.getElementById("story").innerHTML = "Você segue em frente pela passagem e finalmente encontra uma saída da floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  
  function escolha6() {
    document.getElementById("story").innerHTML = "Você foge aterrorizado e nunca mais retorna à floresta.";
    document.getElementById("story").innerHTML += "<br><button onclick='reiniciar()'>Jogar novamente</button>";
  }
  
  function reiniciar() {
    location.reload();
  }