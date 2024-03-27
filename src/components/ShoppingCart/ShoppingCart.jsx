import { Box, Paper, Typography } from "@mui/material";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <Paper
      sx={{
        height: "440px",
        boxSizing: "border-box",
        p: isSmallScreen ? "5px" : 3,
        mt: isSmallScreen ? 5 : 0,
      }}
    >
      <Box
        component="ul"
        sx={{
          height: "392px",
          overflow: "auto",
          position: "sticky",
          top: "0px",
          backgroundColor: "#fff",
        }}
      >
        {cart.length > 0 ? (
          <ShoppingCartItem drugs={cart} />
        ) : (
          <Typography variant="p" component="p" align="center" mt={20}>
            Your cart is empty
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default ShoppingCart;
