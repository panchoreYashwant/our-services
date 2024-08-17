import {
  AppBar,
  // Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = ["Services", "Case Studies", "Clients", "About"];

  return (
    <AppBar position="sticky" sx={{ background: "#4a00e0" }}>
      <Container
        maxWidth="lg"
        fontWeight="bold"
        sx={{ display: "flex", padding: 2, justifyContent: "space-between" }}
      >
        <img
          src="https://fulcro-prod-website-assets.fulcroworld.com/assets/media/IBS_Fulcro_Logo_250x50_02_0ff5ffa377.png"
          alt=""
        />

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit">
              {item}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#000000", color: "white" }}
          >
            Start a Project
          </Button>
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Container>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#4a00e0", height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "white", marginLeft: "auto" }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={item}
                  sx={{ color: "white", textAlign: "center" }}
                />
              </ListItem>
            ))}
            <ListItem button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9800",
                  color: "white",
                  margin: "auto",
                }}
              >
                Start a Project
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
