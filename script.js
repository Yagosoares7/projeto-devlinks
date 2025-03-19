function mudarTema() {
  const html = document.documentElement
  html.classList.toggle("modo-claro")

  //pegar a tag img
  const img = document.querySelector("#container-profile img")
  //substituir a imagem
  if (html.classList.contains("modo-claro")) {
    //se tiver modo claro, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não, mantém a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}