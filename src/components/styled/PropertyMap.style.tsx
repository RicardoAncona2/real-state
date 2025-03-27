import { styled, Box, Paper } from "@mui/material"

// Styled components
export const MapContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  aspectRatio: "2 / 1", // Maintain aspect ratio for the map
}))

export const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
})

export const PolygonSvg = styled("svg")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 10,
})

export const PolygonPath = styled("path")(({ theme }) => ({
  cursor: "pointer",
  transition: "fill 0.3s ease, stroke-width 0.3s ease",
  pointerEvents: "auto",
  "&:hover": {
    strokeWidth: 2,
    stroke: theme.palette.primary.main,
  },
}))

export const LegendContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  bottom: 20,
  right: 20,
  padding: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  zIndex: 20,

}))

export const LegendItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}))

export const LegendColor = styled(Box)({
  width: 20,
  height: 20,
  marginRight: 8,
  borderRadius: 4,
})

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}))

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
}))
