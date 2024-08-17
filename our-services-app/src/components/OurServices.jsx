import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBar from "./SearchBar";
import { KeyboardArrowDown } from "@mui/icons-material";
import HeadingWithCursor from "./HeadingWithCursor";

const OurServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4A00E0, #8E2DE2)",
        color: "white",
        textAlign: "center",
        minHeight: "92.8vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          // component="h1"
          sx={{ marginBottom: "00px", fontWeight: 700 }}
        >
          {/* Immersive Digital Experiences
          <br />
          Through Data | */}
          <HeadingWithCursor variant={isMobile ? "h4" : "h2"} />
          <SearchBar />
        </Typography>

        <Box
          sx={{
            position: "absolute",
            bottom: "20px", // Adjust the distance from the bottom
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button
            sx={{
              // variant="outlined"
              padding: "10px 30px",
              borderRadius: "20px",
              backgroundColor: "rgba(105,250,200,0.4)",
              color: "white",
              fontSize: isMobile ? "10px" : "16px",
              "&:hover": {
                backgroundColor: "ff5722",
              },
            }}
          >
            Explore Our Services
            <KeyboardArrowDown />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
