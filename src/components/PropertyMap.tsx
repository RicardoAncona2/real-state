"use client"

import React, { useState, } from "react"
import {
  Box,
  Typography,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { PageContainer, MapContainer, PolygonSvg, PolygonPath, LegendContainer, LegendItem, LegendColor } from "./styled/PropertyMap.style"
import ImageMap from "./ImageMap"
import { Lot, sampleLots } from "./LotsList"
import Image360Viewer from "./Image360Viewer"
import Grid from '@mui/material/Grid2';


export default function PropertyMap() {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))



  const handleLotClick = (lot: Lot) => {
    setSelectedLot(lot)
  }

  const handleCloseDialog = () => {
    setSelectedLot(null)
  }


  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price)
  }


  const createPolygonPath = (coordinates: [number, number][]) => {
    return (
      coordinates
        .map((coord, index) => {
          const [x, y] = coord
          return `${index === 0 ? "M" : "L"} ${x} ${y}`
        })
        .join(" ") + " Z"
    )
  }
  return (
    <PageContainer id="Cotiza">
      <Typography variant="h4"
        align="center">

        Mapa de lotes disponibles
      </Typography>

      <MapContainer >

        <ImageMap />
        <PolygonSvg viewBox="0 0 100 100" preserveAspectRatio="none">
          {sampleLots.map((lot) => (
            <Tooltip
              key={lot.id}
              title={
                <React.Fragment>
                  <Typography variant="body2">{lot.name}</Typography>
                  <Typography variant="body2">{lot.area} m²</Typography>
                  <Typography variant="body2">{formatPrice(lot.price)}</Typography>
                </React.Fragment>
              }
              arrow
            >
              <PolygonPath
                d={createPolygonPath(lot.coordinates)}
                fill={lot.color}
                stroke="#ffffff"
                strokeWidth={0.1}
                onClick={() => handleLotClick(lot)}
              />
            </Tooltip>
          ))}
        </PolygonSvg>

        <LegendContainer elevation={3}>
          <Typography variant="subtitle2" gutterBottom>
            Lot status
          </Typography>
          <LegendItem>
            <LegendColor sx={{ backgroundColor: "rgba(76, 175, 80, 0.6)" }} />
            <Typography variant="body2">Available</Typography>
          </LegendItem>
          <LegendItem>
            <LegendColor sx={{ backgroundColor: "rgba(255, 152, 0, 0.6)" }} />
            <Typography variant="body2">Reserved</Typography>
          </LegendItem>
          <LegendItem>
            <LegendColor sx={{ backgroundColor: "rgba(244, 67, 54, 0.6)" }} />
            <Typography variant="body2">Sold</Typography>
          </LegendItem>
        </LegendContainer>
      </MapContainer>

      {<Dialog open={!!selectedLot} onClose={handleCloseDialog} maxWidth="lg" fullWidth fullScreen={isMobile} >
        {selectedLot && (
          <>
            <Grid container spacing={2} >
              <Grid size={{ xs: 12, md: 6 }} height={"75vh"}>
                {<Image360Viewer tourUrl="https://storage.net-fs.com/hosting/2727323/454/" style={{ height: "74vh", objectFit: "cover" }}
                />}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} >
                <DialogTitle>
                  {selectedLot.name}
                  <Typography variant="caption" display="block" color="text.secondary">
                    ID: {selectedLot.id}
                  </Typography>
                </DialogTitle>
                <DialogContent dividers>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Detalles del Lote
                    </Typography>
                    <Typography variant="body1">Área: {selectedLot.area} m²</Typography>
                    <Typography variant="body1">Precio: {formatPrice(selectedLot.price)}</Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color:
                          selectedLot.status === "available"
                            ? "success.main"
                            : selectedLot.status === "reserved"
                              ? "warning.main"
                              : "error.main",
                      }}
                    >
                      Estado:{" "}
                      {selectedLot.status === "available"
                        ? "Disponible"
                        : selectedLot.status === "reserved"
                          ? "Reservado"
                          : "Vendido"}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1" gutterBottom>
                    Descripción
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {selectedLot.description}
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom>
                    Características
                  </Typography>
                  <List dense>
                    {selectedLot.characteristics.map((characteristic, index) => <ListItem key={index}>
                      <ListItemText primary={characteristic} />
                    </ListItem>)}
                  </List>

                </DialogContent>

              </Grid>

            </Grid>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cerrar</Button>
              {selectedLot.status === "available" && (
                <Button variant="contained" color="primary">
                  Cotizar
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>}
    </PageContainer>
  )
}

