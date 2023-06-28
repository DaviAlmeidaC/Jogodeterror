function iniciarVideo() {
    var video = document.getElementById("meuVideo");
    video.play();
  }

  

  const div = document.querySelector('.div-prin')
  const escrita = document.querySelector('.escrita')

  const button = document.querySelector('.button1')
  const button2 = document.querySelector('.button2')

  function clicar () {
    div.style.backgroundImage = 'url(/imagens/tumblr_n9t663wgKp1s8radko1_500.gif)'
    escrita.innerHTML = "Você ouve um barulho assustador atrás de você. O que você faz?";
    button.innerHTML += "<br><button class='button1' onclick='clicar1()'>Correr para longe</button>"
    button.innerHTML += "<button class='button1' onclick='clicar1()'>Investigar o barulho</button>"
  }

  function clicar1() {
    div.style.backgroundImage = 'url(/imagens/capa_locais_assombrados_brasil_widelg.jpg)'
    escrita.innerHTML = "coore";
    button.innerHTML = "<button class='button1' onclick='clicar1()'>la</button>"
      
  }


  
  