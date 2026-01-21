import { Padding } from "@mui/icons-material";
import { Container, Typography, Grid } from "@mui/material";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "MongoDB"];

  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My Skills
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <paper sx={{Padding:2,textAlign:"center"}}>
              {skill}
            </paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
