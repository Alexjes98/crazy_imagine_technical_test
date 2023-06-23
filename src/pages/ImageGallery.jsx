/*
  Página que muestra una galería de imágenes
  Utiliza el componente ImageList de Material UI para mostrar las imágenes
  y el componente Pagination para permitir la navegación entre las páginas de imágenes.
  el número de columnas de la galería se ajusta de acuerdo al tamaño de la pantalla.
  utilizando el hook useMediaQuery de Material UI.
  Las fotos se obtienen de la API de Pexels
  Un estado local se utiliza para almacenar las fotos obtenidas de la API.
  El estado local se actualiza cada vez que cambia el número de página.
*/
import { useState, Fragment, useEffect } from 'react'
import {
  Typography,
  Box,
  Pagination,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { getPhotos } from '../api/api'

const ImageGallery = () => {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const cols = isSmallScreen ? 2 : 4;

  useEffect(() => {
    getPhotos(page, limit).then((data) => {
      setPhotos(data.photos)
    })
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Fragment>
      <Typography variant="h5" component="h2">
        Galería de Imagenes
      </Typography>
      {photos &&
        <Fragment>

          <ImageList variant="masonry" gap={8} cols={cols}>
            {
              photos.map((photo) =>
                <ImageListItem sx={{
                  position: 'relative',
                  '&:hover::before': {
                    content: '""',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                  },
                }} key={photo.id} width={photo.width} height={photo.height}>
                  <img
                    src={photo.src.original}
                    width={photo.width}
                    height={photo.height}
                    loading="auto"
                    alt={photo.alt}
                  />
                </ImageListItem>
              )
            }
          </ImageList>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={5} onChange={handleChange} />
          </Box>
        </Fragment>
      }
    </Fragment>
  )
}
// PD: debí haber usado Typescript FY Js
export default ImageGallery