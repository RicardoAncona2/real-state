import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000",
        top: 0,
        width: "100%",
        padding: "1rem",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#ffffff", fontFamily: "General Grotesque" }}
        >
          Company name
        </Typography>
        <Box>
          {["Home", "Quote", "Contact"].map((item) => (
            <Button key={item} color="inherit" sx={{ "&:hover": { textDecoration: "underline" } }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>

      
    </AppBar>
  );
};

export default Header;
