import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"

const Footer =()=>{
    return (
        <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          textAlign: "center",
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#ffffff", // Light background for contrast
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff", // White border to stand out
                  },
                },
                color: "black", // Black text for readability
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                },
                color: "black",
              }}
            />
            <FormControl
              fullWidth
              sx={{ backgroundColor: "#ffffff", borderRadius: 1 }}
            >
              <InputLabel id="contact-reason-label">Lots</InputLabel>
              <Select
                labelId="contact-reason-label"
                id="contact-reason"
                label="Reason for Contact"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff",
                    },
                  },
                }}
              >
                <MenuItem value="inquiry">Lot 1</MenuItem>
                <MenuItem value="support">Lot 2</MenuItem>
                <MenuItem value="feedback">Lot 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                },
                color: "black",
              }}
            />

            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                backgroundColor: "#212529",
                color: "#fff",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Container>
        <Typography variant="body2" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Inspired Landing Page. All rights
          reserved.
        </Typography>
      </Box>
    )
}
export default Footer