import { Button, Container, TextField, Typography } from "@mui/material";

const Contacts = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact
      </Typography>

      <TextField fullWidth label="Name" margin="normal" />

      <TextField fullWidth label="Email" margin="normal" />

      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />

      <Button variant="contained" sx={{ mt: 3 }}>
        Send Message
      </Button>
    </Container>
  );
};

export default Contacts;
