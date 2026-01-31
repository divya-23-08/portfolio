import { Box, Button,Typography ,TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Login page
      </Typography>

      <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary">
        login
      </Button>
      <Button variant="contained" color="seconadry" sx={{ml:2}} onClick={()=>navigate("/register")}>
        register
      </Button>
    </Box>
  );
};

export default Login;
