import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Paper, Snackbar, Typography } from "@mui/material";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../regux/orders/orders";
import { object, string, number } from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { clearCart } from "../../regux/cart/cart";

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
  const [open, setOpen] = useState(false);
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useDispatch();
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
      createOrder({ ...values, order: cart[0] });
      setOpen(true);
      formik.resetForm();
      dispatch(clearCart());
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{
        mt: 5,
        display: "grid",
        gap: "30px",
        gridTemplateColumns: "auto 60%",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        key={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
      >
        <Alert severity="success">
          Thank you for the order. Our manager will connect with you.
        </Alert>
      </Snackbar>
      <Paper sx={{ p: "20px", maxHeight: "400px" }}>
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

//OLD V
// import TextField from "@mui/material/TextField";
// import { Box, Button, Paper, Typography } from "@mui/material";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
// import { useSelector } from "react-redux";
// import { useCreateOrderMutation } from "../../regux/orders/orders";

// const Order = () => {
//   const { cart } = useSelector((state) => state.cart);
//   const [createOrder, result] = useCreateOrderMutation();
//   const countTotal = () => {
//     let total = 0;
//     cart.map(({ price, quantity }) => (total += price * quantity));
//     return `${Number.parseFloat(total).toFixed(2)}$`;
//   };

//   // const validateBody = () => {};

//   const createDrugOrder = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       name: data.get("name"),
//       email: data.get("email"),
//       phone: Number(data.get("phone")),
//       address: data.get("address"),
//     };
//     createOrder({ ...userData, order: cart[0] });
//     console.log(result);
//   };

//   return (
//     // <Container component="main" maxWidth="xs">
//     //   <CssBaseline />
//     // <Box
//     //   sx={{
//     //     marginTop: 8,
//     //     display: "flex",
//     //     flexDirection: "column",
//     //     alignItems: "center",
//     //   }}
//     // >
//     <Box
//       component="form"
//       onSubmit={createDrugOrder}
//       noValidate
//       sx={{
//         mt: 5,
//         display: "grid",
//         gap: "30px",
//         gridTemplateColumns: "auto 60%",
//       }}
//     >
//       <Paper sx={{ p: "20px", maxHeight: "400px" }}>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           label="Name"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="email"
//           label="Email"
//           type="email"
//           pattern=" /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/"
//           title="Email must contains the @ symbol"
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="phone"
//           label="Phone"
//           type="number"
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="address"
//           label="Address"
//           type="address"
//           autoComplete="current-address"
//           pattern="^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$"
//         />
//       </Paper>
//       <ShoppingCart cart={cart} />
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "flex-end",
//           alignItems: "center",
//           gap: "20px",
//           mr: 2,
//           mt: 5,
//         }}
//       >
//         <Typography variant="p" component="p">
//           Total: {countTotal()}
//         </Typography>
//         <Button variant="contained" type="submit">
//           Submit
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Order;
