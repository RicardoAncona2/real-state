"use client"
import { Button, Box } from "@mui/material";


export const HeaderActionButtons = () => {
    const scrollToSection = (id = "") => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return <Box>
        {["Inicio", "Cotiza", "Contacto"].map((item) => (
            <Button key={item} color="inherit" sx={{ "&:hover": { textDecoration: "underline" } }} onClick={() => scrollToSection(item)}>
                {item}
            </Button>
        ))}
    </Box>
}