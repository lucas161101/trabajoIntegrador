import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imagenes from '../imagenes';


const Noticia = ({ 
  noticia 
}) => {
  const { DateTime } = require("luxon");
  const fechaPublicacion = (date) => {
    const dia = DateTime.fromISO(date).setZone("UTC").toFormat("dd-MM-yyyy");
    const hora = DateTime.fromISO(date).setZone("UTC").toFormat("HH:mm");

    return (
      `Publicado el: ${dia} a las ${hora} hs`
      );
  }; 
  
  return (
        <Card sx={{ width: 500, marginBottom: 3, marginTop: 3  }}>
      <CardActionArea href={noticia.url} target="_blank">
        <CardMedia
          component="img"
          height="280"
          width={500}
          image={noticia.urlToImage==='N/A' ?  imagenes.notFound: noticia.urlToImage}
          alt={noticia.urlToImage}
        />
        <CardContent>
          <Typography variant='body2' >
            Fuente: {noticia.source.name}
          </Typography>
          <Typography gutterBottom variant="h5" fontWeight={550} marginTop={1}>
            {noticia.title}
          </Typography>
          <Typography variant="body2" color="text.primary"marginTop={2}>
            {noticia.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" marginTop={2}>
            {fechaPublicacion(noticia.publishedAt)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const ListaNoticias = ({noticias}) => {
    return (
    <section 
    style=
    {{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: '1px'
    }}
    >
      {
        noticias.map((noticia) => {
          return <Noticia noticia={noticia} />
        })
      }
    </section>
  )
}

export default Noticia;