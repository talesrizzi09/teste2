function mostrarNoticia(noticia11) {
    // Oculta todas as notícias
    const noticias = document.querySelectorAll('.noticia');
    noticias.forEach(noticia11 => {
      noticia11.style.display = 'none';
    });

    // Mostra a notícia desejada
    document.getElementById(noticiaId).style.display = 'block';