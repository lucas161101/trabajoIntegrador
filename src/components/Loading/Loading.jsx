import LinearProgress from '@mui/material/LinearProgress';
import { Container, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Container style={{ width: 545, height: 30, marginBottom: 20, marginTop:20 }}>
      <Typography variant="body2" color='text.secondary'>Cargando..</Typography>
      <LinearProgress />
    </Container>
  );
}