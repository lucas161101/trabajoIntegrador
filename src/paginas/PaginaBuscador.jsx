import { Alert, Container, Typography } from "@mui/material";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticia";
import { useState } from "react";
import { useEffect } from "react";
import { getNoticias } from "../services/noticias";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/system";


const PaginaBuscador = () =>{
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [totalResults, setTotalResults] = useState()
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticia()       
        }
    }, [searchParams, pagina]);
    
    const buscarNoticia = async () => {
        setIsLoading(true)
        const {articles: notis, totalResults}  = await getNoticias(searchParams.get('query'), pagina);
        setTotalResults(totalResults);
        setNoticias(notis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);    
    }

    const onBuscar = (criterioBusqueda) => {
        if (criterioBusqueda.length >= 3) {
            setSearchParams({ query: criterioBusqueda });
        }
    };

    const goToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
    }
    
    const onCambioPagina = (pagina) => {
        setPagina(pagina);
        goToTop(pagina)
        console.log(pagina)
    };

    const resultadosTotales = totalResults

    return ( 
        <Container maxWidth='sm'> 
            <Header />
            {!noticias && !isLoading && 
                <Typography variant='h4'> 
                    ¡Bienvenido! Por favor, insertar su búsqueda    
                </Typography>
            }
            <Buscador onBuscar={onBuscar}/>
            { noticias  && 
                <Typography variant='caption' > 
                    Estas viendo {noticias.length} noticias de {resultadosTotales} resultados  
                </Typography>
            }
            { noticias < 1 && 
                <Box marginTop={15} marginBottom={15}>
                    <Typography color='text.Secondary' variant="h3"> 
                        No se encontraron resultados... 
                    </Typography>
                </Box>
            }
            { isLoading && <Loading /> }
            { noticias && <ListaNoticias noticias={noticias} /> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} />}
            {noticias  && <Footer />}
        </Container>
    )
}


export default PaginaBuscador;