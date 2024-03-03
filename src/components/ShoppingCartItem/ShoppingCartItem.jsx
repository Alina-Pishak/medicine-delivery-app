import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../regux/cart/cart";

const ShoppingCartItem = ({ drugs }) => {
  const countPrice = (price, quantity) => {
    if (isNaN(price || quantity)) {
      return;
    }
    return `${Number.parseFloat(price * quantity).toFixed(2)}$`;
  };
  const dispatch = useDispatch();
  return drugs.map(({ id, name, img, price, quantity, quantityAvailable }) => (
    <Grid xs={2} sm={4} md={4} mb={3} key={id} item component="li">
      <Card
        sx={{
          maxWidth: "98%",
          maxHeight: 400,
          display: "flex",
          boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
          paddingRight: "2px",
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          height="146"
          image={img}
          sx={{ maxWidth: "300px", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="span"
            fontWeight={400}
            component="p"
            sx={{ maxHeight: 60 }}
          >
            Price: {countPrice(price, quantity)}
          </Typography>
          <TextField
            type="number"
            inputProps={{ min: 1, max: quantityAvailable }}
            size="small"
            margin="dense"
            value={quantity}
            onChange={({ target }) => {
              if (isNaN(target.valueAsNumber)) {
                dispatch(updateQuantity({ id, quantity: 1 }));
                return;
              }
              dispatch(updateQuantity({ id, quantity: target.valueAsNumber }));
            }}
            sx={{ maxWidth: "100px" }}
          />
        </CardContent>
        <CardActions
          sx={{ marginLeft: "auto" }}
          onClick={() => dispatch(removeFromCart(id))}
        >
          <DeleteIcon />
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default ShoppingCartItem;