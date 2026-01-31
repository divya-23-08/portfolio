import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {use,useEffect}from 'react';
import avatar from"..assets/image.png";
const Home = () => {
    const navigate=useNavigate();

    const BASE_URL=import.meta.env.VITE_BASE_URL;
    console.log("BASE_URL:::",BASE_URL);
    useEffect(()=>{
      axios.get(`${BASE_URL}/user`).then((response)=>{
        console.log(response.data);
        
      });
    },[]);
    const username=localStorage.getItem("username")
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
