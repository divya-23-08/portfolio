import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item size={{ xs: 12, md: 6 }} sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
            Hi, I'm Antony Roger, a full stack developer,javascript developer.
          </Typography>

          <Button variant="contained" sx={{ mt: 3 }} onClick={()=>navigate("/projects")}>
            View Projects
          </Button>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }} sx={{ mb: 4 }}>
          <img src="../assets/image.jpg" alt="Antony Roger" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
