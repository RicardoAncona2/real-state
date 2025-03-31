import { AppBar, Toolbar, Typography } from "@mui/material";
import { HeaderActionButtons } from "./HeaderActionButtons";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000",
        top: 0,
        width: "100%",
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
        <HeaderActionButtons />
      </Toolbar>


    </AppBar>
  );
};

export default Header;
