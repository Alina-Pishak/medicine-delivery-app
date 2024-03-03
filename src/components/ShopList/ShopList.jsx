import { Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import ShopListItem from "../ShopListItem/ShopListItem";
import { useGetDrugsQuery } from "../../regux/drugs/drugs";

const ShopList = () => {
  const { data: drugs } = useGetDrugsQuery();
  return (
    <Box sx={{ display: "flex", marginTop: "50px" }}>
      <Paper sx={{ width: "30%" }}>
        <Typography variant="p" component="p">
          Shops:
        </Typography>
        <List>
          <ListItem>Drug 24</ListItem>
        </List>
      </Paper>
      {drugs?.length > 0 && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          component="ul"
        >
          {/* <Grid xs={2} sm={4} md={4} key={"index"} item component="li"> */}
          <ShopListItem drugs={drugs} />
          {/* </Grid> */}
        </Grid>
      )}
    </Box>
  );
};

export default ShopList;
