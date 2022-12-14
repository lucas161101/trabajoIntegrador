import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imagenes from "../imagenes";

const Header = ()=> {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <img src={imagenes.logoBuscador} alt="logo-buscador" width={40} height={40} />  
          <Button variant="text" sx={{ color: 'white'}} href='/'>
              Buscador de noticias
          </Button>  
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <br/>
      <br/>
    </header>
  );
}

export default Header