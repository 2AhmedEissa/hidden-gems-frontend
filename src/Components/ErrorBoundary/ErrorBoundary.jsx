import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { motion } from "framer-motion";

export const ErrorPage = () => {
  const handleReset = () => {
    window.location.href = "/";
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #050505 0%, #1a0505 100%)",
        color: "white",
        textAlign: "center",
        p: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "rgba(221, 3, 3, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 4,
              border: "1px solid rgba(221, 3, 3, 0.2)",
            }}
          >
            <AlertTriangle size={40} color="#DD0303" />
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Oops! <span style={{ color: "#DD0303" }}>Something</span> went
            wrong
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.6)",
              mb: 6,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            Even gems have their rough moments. We've encountered an
            unexpected error.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleReload}
              startIcon={<RefreshCw size={20} />}
              sx={{
                bgcolor: "#DD0303",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "99px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { bgcolor: "#b90202" },
              }}
            >
              Try Again
            </Button>
            <Button
              variant="outlined"
              onClick={handleReset}
              startIcon={<Home size={20} />}
              sx={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "99px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Back to Home
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
