const API_KEY = "dfed230a05fc4090b905ff3ccf541906";
const NEWS_API = "https://newsapi.org/v2/everything";

export const getNoticias = async (criterioBusqueda, paginaActual) => {
      const respuesta = await fetch(
        `${NEWS_API}?q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&pageSize=10&language=es`
        );
      const noticias = await respuesta.json();
      return noticias;
    } 
