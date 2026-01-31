import { Box, Button,Typography ,TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
   const [userData,setUserData]=useState({});
       const handleChange=(event)=>{
           const{name,value}=event.target;
           setUserData({ ...userData,[name]:Value});
       }
    const handleLogin = async () => {
      console.log("login user data", userData);
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        userData,
      );
      console.log("login response", response.data);
      if(response.data){
      alert(response.data.message);
      navigate("/home");
      localStorage.setItem("token",response.data.token);
    }
    };
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Login page
      </Typography>

      <TextField label="Email" name="email" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleChange} />

      <TextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onclick={handleLogin}>
        login
      </Button>
      <Button variant="contained" color="seconadry" sx={{ml:2}} onClick={()=>navigate("/register")}>
        register
      </Button>
    </Box>
  );
};

export default Login;
