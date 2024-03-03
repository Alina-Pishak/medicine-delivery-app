import { Box, Paper, Typography } from "@mui/material";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <Paper
      sx={{
        p: 3,
        height: "440px",
        boxSizing: "border-box",
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
