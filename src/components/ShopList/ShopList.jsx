import { Grid } from "@mui/material";
import ShopListItem from "../ShopListItem/ShopListItem";

const ShopList = ({ drugs }) => {
  return (
    drugs?.length > 0 && (
      <Grid container spacing={3} component="ul">
        <ShopListItem drugs={drugs} />
      </Grid>
    )
  );
};

export default ShopList;
