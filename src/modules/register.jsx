import { Box, Typography,TextField,Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();
    const [userData,setUserData]=useState({});
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setUserData({ ...userData,[name]:Value});
    }
    const handleRegister=async()=>{
        console.log("Register user data",userData);
     const response=await  axios.post("http://localhost:5000/auth/register",userData);
     console.log("Registration response",response.data);

     
    }
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Register page
      </Typography>

      <TextField label="Username" name="username" variant="outlined" fullWidth sx={{ mb: 2 }} value={userData?.username} onChange={handleChange} />

      <TextField label="Email" name="email" variant="outlined" fullWidth sx={{ mb: 2 }} value={userData?.email} onChange={handleChange}/>

      <TextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={userDate?.password}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
      <Button variant="contained" color="primary" sx={{ml:2}} onClick={()=>navigate("/login")}>
        Login
      </Button>
    </Box>
  );
};

export default Register;
