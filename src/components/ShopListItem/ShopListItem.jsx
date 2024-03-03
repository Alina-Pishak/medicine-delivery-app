import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Grid, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../regux/cart/cart";
import { useState } from "react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../regux/favorites/favorites";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { CheckCircleOutlineIcon } from "@mui/icons-material";

const ShopListItem = ({ drugs }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const addDrugToCart = (data) => {
    dispatch(addToCart(data));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addDrugToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };
  const removeDrugFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };
  return drugs.map(
    ({ _id: id, name, description, img, price, quantityAvailable }) => (
      <Grid xs={2} sm={4} md={4} key={id} item component="li">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          key={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={4000}
        >
          <Alert severity="success">Drug was successfully added to cart.</Alert>
        </Snackbar>
        <Card sx={{ maxWidth: 345, height: 350, position: "relative" }}>
          <FavoriteBorderIcon
            onClick={() => addDrugToFavorites(id)}
            htmlColor="#fff"
            sx={{ position: "absolute", top: "14px", right: "14px" }}
          />
          {favorites.map(
            (favoriteId) =>
              favoriteId === id && (
                <FavoriteIcon
                  key={id}
                  htmlColor="rgb(25, 118, 210)"
                  onClick={() => removeDrugFromFavorites(id)}
                  sx={{ position: "absolute", top: "14px", right: "14px" }}
                />
              )
          )}
          <CardMedia component="img" alt={name} height="140" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ maxHeight: 60 }}>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                addDrugToCart({
                  id,
                  name,
                  description,
                  img,
                  price,
                  quantity: 1,
                  quantityAvailable,
                })
              }
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  );
};

export default ShopListItem;
