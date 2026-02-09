import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Email login ");
    }
  };

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const accessToken = result.user.accessToken;

    
    navigate("/home", {
      state: { accessToken },
    });
  } catch (error) {
    console.error("Google login failed:", error);
  }
};

  

  return (
    <Box width="100%" maxWidth={480}>
      <Typography variant="h4" fontWeight={700} mb={1} align="center">
        Welcome back!
      </Typography>

      <Typography color="text.secondary" mb={4} align="center">
        Simplify your workflow and boost your productivity <br />
        with <b>Tuga's App</b>. Get started for free
      </Typography>

      <TextField
        fullWidth
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "25px" } }}
      />

      <TextField
        fullWidth
        name="password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{ mb: 1, "& .MuiOutlinedInput-root": { borderRadius: "25px" } }}
      />

      <Box textAlign="right" mb={3}>
        <Link underline="none" sx={{ color: "#000", cursor: "pointer" }}>
          Forgot Password?
        </Link>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{
          borderRadius: "25px",
          py: 2,
          backgroundColor: "#000",
          "&:hover": { backgroundColor: "#333" }
        }}
      >
        Login
      </Button>

      <Typography align="center" my={3}>
        or continue with
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <IconButton
          onClick={handleGoogleLogin}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            width: 48,
            height: 48,
            "&:hover": { backgroundColor: "#333" }
          }}
        >
          <GoogleIcon />
        </IconButton>

        <IconButton sx={{ backgroundColor: "#000", color: "#fff", width: 48, height: 48 }}>
          <AppleIcon />
        </IconButton>

        <IconButton sx={{ backgroundColor: "#000", color: "#fff", width: 48, height: 48 }}>
          <FacebookIcon />
        </IconButton>
      </Box>

      <Typography align="center" mt={3}>
        Not a member? <Link underline="none" fontWeight={600} sx={{ color: "#7eba83", cursor: "pointer" }}>Register now</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
