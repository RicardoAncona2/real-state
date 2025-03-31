import React from "react";
import {
  Typography,
  Container,
} from "@mui/material";
import { Header, Image360Viewer, Hero, Footer } from "@/components/";
import LotMap from "@/components/sampleLots";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"

        >Explora la Vista Aérea de Nuestras Propiedades Exclusivas</Typography>
        <Image360Viewer tourUrl="https://rs1-swart.vercel.app/" style={{ height: "80vh" }} />
        <LotMap />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
