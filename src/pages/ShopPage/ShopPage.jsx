import { useState } from "react";
import ShopList from "../../components/ShopList/ShopList";
import { useGetDrugsQuery } from "../../regux/drugs/drugs";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Filters from "../../components/Filters/Filters";

const ShopPage = () => {
  const [sort, setSort] = useState("");
  const [shop, setShop] = useState("");
  const { data: drugs, isLoading } = useGetDrugsQuery({ shop, sort });

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        marginTop: "50px",
        gap: "20px",
        paddingRight: "50px",
        paddingLeft: "50px",
        paddingBottom: "50px",
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Filters setShop={setShop} setSort={setSort} sort={sort} />
      <ShopList drugs={drugs} />
    </Box>
  );
};

export default ShopPage;
