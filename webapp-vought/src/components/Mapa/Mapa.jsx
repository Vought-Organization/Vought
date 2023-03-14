import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import {ContainerMapa} from "./AppStyled"

export const Mapa = () => {
  const Responsivo = useMediaQuery('(min-width: 600px)')

  const coordenadas = {lat: 0, lgn: 0};

  return (
    <>
  <ContainerMapa>

      <GoogleMapReact
       bootstrapURLKeys={{key: 'AIzaSyA1S00x-0fsfTjuQD6saCff9abywMWxqRg'}}
       defaultCenter={coordenadas}
       center={coordenadas}
       defaultZoom={14}
       margin={[50, 50, 50, 50]}
       options={''}
       onChange={''}
       onChildClick={''}>


      </GoogleMapReact>

  </ContainerMapa>

    </>
  )
}
