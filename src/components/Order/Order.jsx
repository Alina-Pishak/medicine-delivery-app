import TextField from "@mui/material/TextField";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../redux/orders/orders";
import { object, string, number, array } from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { clearCart } from "../../redux/cart/cart";
import { useMediaQuery } from "react-responsive";

const validationSchema = object({
  name: string("Enter your name").required("Name is required"),
  email: string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: number("Enter your phone").required("Phone is required").positive(),
  address: string("Enter your address").required("Address is required"),
});

const Order = () => {
  const { cart } = useSelector((state) => state.cart);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [createOrder, result] = useCreateOrderMutation();
  const dispatch = useDispatch();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const countTotal = () => {
    let total = 0;
    cart.map(({ price, quantity }) => (total += price * quantity));
    return `${Number.parseFloat(total).toFixed(2)}$`;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (cart.length < 1) {
        setOpenError(true);
        return;
      }
      createOrder({ ...values, order: cart });
      setOpenSuccess(true);
      formik.resetForm();
      dispatch(clearCart());
    },
  });

  const handleClose = (type) => {
    if (type === "error") {
      setOpenError(false);
    } else if (type === "success") {
      setOpenSuccess(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{
        mt: 5,
        display: isBigScreen ? "grid" : "block",
        gap: "30px",
        gridTemplateColumns: "auto 60%",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSuccess}
        onClose={() => handleClose("success")}
        sx={{ width: "100%" }}
        autoHideDuration={4000}
      >
        <Alert severity="success">
          Your order has been successfully created. Thank you for choosing us!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openError}
        onClose={() => handleClose("error")}
        sx={{ width: "100%" }}
        autoHideDuration={4000}
      >
        <Alert severity="error">
          You need to add some products to the cart to create an order.
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={result.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper sx={{ p: "20px", maxHeight: "440px" }}>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin="normal"
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          margin="normal"
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Paper>
      <ShoppingCart cart={cart} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          mr: 2,
          mt: 5,
        }}
      >
        <Typography variant="p" component="p">
          Total: {countTotal()}
        </Typography>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Order;
