import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState('');  
  
  return (
    <Container sx={{ width: 550, maxWidth: '100%', marginTop: 2 }}>
        <TextField 
          fullWidth 
          label="Buscar"           
          value={criterioBusqueda}
          role="searchbox"
          onChange={(e) => { 
            setCriterioBusqueda(e.target.value)
          }}
          onKeyPress={(e) => {
            if ((e.key === "Enter") && (criterioBusqueda.length >= 3)) {
              onBuscar(criterioBusqueda)
            }}}
        />
            <Button
                color='primary'
                variant= "contained"
                type= "submit"
                sx={{ width:500, maxWidth: '100%'}}
                onClick={() => {
                  if (criterioBusqueda.length >= 3) {
                    onBuscar(criterioBusqueda)
                  }
                }}
                role="button"                
                >
                <SearchIcon />
            </Button>
    </Container>
  );
}

export default Buscador;