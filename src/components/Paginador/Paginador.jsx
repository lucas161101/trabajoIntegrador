import { Pagination } from "@mui/material"
import { Stack } from "@mui/system";

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina)
    };
    return (
        <Stack spacing={2} alignItems="center" >
            <Pagination 
                count={cantidadPaginas} 
                color="primary"  
                onChange={cambiaPagina}
                
            />
            
        </Stack>
    );
}

export default Paginador