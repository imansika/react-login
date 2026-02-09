import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#f0f2f5" }}
    >
      {/* MAIN CARD */}
      <Grid
        container
        maxWidth={1400}
        minHeight={700}
        boxShadow={3}
        borderRadius={3}
        overflow="hidden"
         sx={{ backgroundColor: "#fff" }}
      >
        {/* LEFT – LOGIN FORM */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ xs: 3, sm: 4, md: 6 }}
        >
          <Box width="100%" maxWidth={480}>
            <Typography variant="h4" fontWeight={700} mb={1} align="center">
              Welcome back!
            </Typography>

            <Typography color="text.secondary" mb={4} align="center">
              Simplify your workflow and boost your productivity <br/>with{" "}
              <b>Tuga's App</b>. Get started for free
            </Typography>

            <TextField
              fullWidth
              placeholder="Username"
              sx={{ mb: 2 ,
               '& .MuiOutlinedInput-root': {
                  borderRadius: '25px',
                }
              }}
            />

            <TextField
              fullWidth
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 1 ,
               '& .MuiOutlinedInput-root': {
                  borderRadius: '25px',
                }}}
            />

            <Box textAlign="right" mb={3}>
              <Link underline="none">Forgot Password?</Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "25px",
                py: 2,
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Login
            </Button>

            <Typography align="center" my={3}>
              or continue with
            </Typography>

            <Box display="flex" justifyContent="center" gap={2}>
              {[GoogleIcon, AppleIcon, FacebookIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    width: 48,
                    height: 48,
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>

            <Typography align="center" mt={3}>
              Not a member?{" "}
              <Link underline="none" fontWeight={600}>
                Register now
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT – IMAGE */}
        <Grid
          item
          xs={12}
          md={6}
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "#f6f9f6" }}
        >
          <Box
            component="img"
            src="/src/assets/login-image.svg"
            alt="Login"
            sx={{ width: "70%", maxWidth: 520 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
