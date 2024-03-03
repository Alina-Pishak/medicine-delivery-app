import { Box } from "@mui/material";
import Order from "../../components/Order/Order";

const ShoppingCartPage = () => {
  return (
    <Box component="main" sx={{ paddingRight: "50px", paddingLeft: "50px" }}>
      <Order />
    </Box>
  );
};

export default ShoppingCartPage;
