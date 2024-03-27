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
      <Grid item xs={12} sm={6} md={4} key={id} component="li">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          key={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={4000}
        >
          <Alert severity="success">Drug was successfully added to cart.</Alert>
        </Snackbar>
        <Card sx={{ maxWidth: 345, margin: "0 auto", position: "relative" }}>
          <FavoriteBorderIcon
            onClick={() => addDrugToFavorites(id)}
            htmlColor="rgb(25, 118, 210)"
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
          <CardMedia
            component="img"
            alt={name}
            height="250"
            image={img}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              sx={{
                height: "32px",
                maxWidth: "313px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                height: "40px",
                overflow: "auto",
              }}
            >
              {description}
            </Typography>
            <Typography variant="span" component="p" mt={4}>
              {Number.parseFloat(price).toFixed(2)}$
            </Typography>
          </CardContent>
          <CardActions sx={{}}>
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
