import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const TokenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const accessToken = location.state?.accessToken;

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Typography variant="h5" mb={2}>
        Google Login Successful 
      </Typography>

      <Typography
        variant="body2"
        sx={{
          wordBreak: "break-all",
          maxWidth: 600,
          mb: 4,
        }}
      >
        <b>Access Token:</b> <br />
        {accessToken || "No token found"}
      </Typography>

      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Login
      </Button>
    </Box>
  );
};

export default TokenPage;
