import React from "react";
import { Grid, Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#f0f2f5" }}
    >
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
          <LoginForm />
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
