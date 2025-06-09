import { Box, Container } from '@mui/material';
import LegalNoticeParagraph from './LegalNoticeParagraph';
import tramicar from '../assets/tramicar.svg';
import lineaDirecta from '../assets/linea-directa.svg';
const LegalNotice = () => {
  return (
    <Container component={'section'} sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: { xs: 'wrap', md: 'nowrap' },
      lineHeight: '52px',
      textAlign: 'left',

    }}
      maxWidth='lg'

    >
      <Box
        sx={{
          borderTop: '1px solid #DCE3F2',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          py: 4,
          mt: 4,


        }}
      >
        <LegalNoticeParagraph>
          *Línea Directa asume únicamente los gastos de gestión del servicio “transferencia estándar”. En el caso de que desees contratar nuestro servicio “transferencia express”, será necesario abonar la cantidad adicional correspondiente, 15€, la cual no está cubierta por Línea Directa.
        </LegalNoticeParagraph>
        <LegalNoticeParagraph>
          * TRAMICAR es una empresa dedicada a representación de las partes involucradas ante la Dirección General de Tráfico. Para el servicios de “transferencia estándar”, Tramicar lleva a cabo la gestión de expediente con la administración pública, ejecutando el trámite en nombre de las partes interesadas. La Dirección General de Tráfico enviará la documentación provisional y definitiva según sus procesos. Los plazos de entrega del nuevo permiso de circulación oscilan entorno a 3 - 6 semanas, no obstante, Tramicar no se responsabiliza ante cualquier demora por parte de la administración pública. En el caso de la contratación del servicio de “transferencia express”, Tramicar trabaja con las mejores gestorías colegiadas, lo cual nos permite llevar a cabo la gestión del expediente con plazos más reducidos, estos oscilan entorno a 7-15 días. Tramicar no se responsabiliza ante cualquier demora por parte de la gestoría en cuestión.
        </LegalNoticeParagraph>
        <LegalNoticeParagraph>
          La documentación entregada por TRAMICAR al final del flujo web (certificado de operaciones) es un documento con validez jurídica que acredita la compraventa realizada entre las partes involucradas proporcionando cobertura legal desde el primer momento.
        </LegalNoticeParagraph>

      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
          mt: 4,

          width: '100%',
        }}
      >
        <Box component="img" src={tramicar} alt="Tramicar Logo" />
        <Box component="img" src={lineaDirecta} alt="linea directa" />
      </Box>
    </Container>
  );
};

export default LegalNotice;
