import { Box } from "@mui/material";
import Order from "../../components/Order/Order";
import { useMediaQuery } from "react-responsive";

const ShoppingCartPage = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <Box
      component="main"
      sx={{
        pr: isSmallScreen ? "20px" : "50px",
        pl: isSmallScreen ? "20px" : "50px",
        pb: isSmallScreen ? 7 : 0,
      }}
    >
      <Order />
    </Box>
  );
};

export default ShoppingCartPage;
