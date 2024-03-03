import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Suspense, lazy } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const ShopPage = lazy(() => import("../pages/ShopPage/ShopPage"));
const ShoppingCartPage = lazy(() =>
  import("../pages/ShoppingCartPage/ShoppingCartPage")
);

const App = () => {
  return (
    <Suspense
      fallback={
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path="shopping-cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
