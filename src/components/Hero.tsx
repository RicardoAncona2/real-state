
import { Box, Button, Typography } from "@mui/material";
import { HeroContainer } from "./styled/";

const Hero = () => {
  return (
    <HeroContainer>
      {<iframe
        src="https://rs1-swart.vercel.app/"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        allowFullScreen
      ></iframe>}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "40px", sm: "60px", md: "80px", lg: "120px" },
            letterSpacing: { xs: "2px", sm: "3px", md: "4.5px" },
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          Empower Your Creativity
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            maxWidth: 800,
            mb: 4,
            color: "#ffffff",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            letterSpacing: { xs: "2px", sm: "3px", md: "3.43px" },
            fontWeight: 100,
            margin: "0 auto",
          }}
        >
          Discover groundbreaking Real State solutions.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#212529",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
            }}
            size="large"
          >
            Quote
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            size="large"
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </HeroContainer>
  );
};

export default Hero;
