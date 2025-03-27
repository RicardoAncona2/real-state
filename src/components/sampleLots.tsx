"use client"

import { ThemeProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import PropertyMap from "./PropertyMap"
import theme from "@/theme"

export default function LotMap() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ minHeight: "100vh" }}>
        <PropertyMap />
      </Box>
    </ThemeProvider>
  )
}

