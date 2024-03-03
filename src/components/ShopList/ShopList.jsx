/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import ShopListItem from "../ShopListItem/ShopListItem";

const ShopList = ({ drugs }) => {
  return (
    drugs?.length > 0 && (
      <Grid
        container
        spacing={2}
        columns={{ xs: 3, sm: 8, md: 12 }}
        component="ul"
      >
        <ShopListItem drugs={drugs} />
      </Grid>
    )
  );
};

export default ShopList;
