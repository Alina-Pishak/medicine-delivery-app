import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  color={pathname === "/" ? "rgb(25, 118, 210)" : "inherit"}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                >
                  Shop
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  color={
                    pathname === "/shopping-cart"
                      ? "rgb(25, 118, 210)"
                      : "inherit"
                  }
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/shopping-cart");
                  }}
                >
                  Shopping Cart
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "10px",
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderRadius: 0,
                borderBottom: "1px solid transparent",
                borderBottomColor: pathname === "/" && "#fff",
                transition:
                  "border-bottom-color, 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  borderBottomColor: "#fff",
                },
              }}
            >
              Shop
            </Button>
            <Button
              onClick={() => {
                navigate("/shopping-cart");
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderRadius: 0,
                borderBottom: "1px solid transparent",
                borderBottomColor: pathname === "/shopping-cart" && "#fff",
                transition:
                  "border-bottom-color, 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  borderBottomColor: "#fff",
                },
              }}
            >
              Shopping Cart
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
