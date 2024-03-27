import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useGetDrugsShopsQuery } from "../../regux/drugs/drugs";
import MediaQuery from "react-responsive";

const Filters = ({ setShop, setSort, sort, shop }) => {
  const { data: drugsShops } = useGetDrugsShopsQuery();
  const handleChange = ({ target }) => {
    if (target.name === "sort") {
      setSort(target.value);
    } else if (target.name === "shop") {
      setShop(target.value);
    }
  };
  return (
    <>
      <MediaQuery minWidth={320} maxWidth={1279}>
        <Box
          component={"form"}
          sx={{
            marginBottom: "50px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="shop-select-label">Shop</InputLabel>
            <Select
              labelId="shop-select-label"
              id="shop-select"
              value={shop}
              label="Shops"
              onChange={handleChange}
              name="shop"
            >
              {drugsShops?.map((shop) => (
                <MenuItem key={shop} value={shop}>
                  {shop}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="sort-by-select-label">Sort by</InputLabel>
            <Select
              labelId="sort-by-select"
              id="sort-by-select"
              value={sort}
              label="Sort by"
              onChange={handleChange}
              name="sort"
            >
              <MenuItem value="price-low-to-high">Price low to high</MenuItem>
              <MenuItem value="price-high-to-low">Price high to low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={1280}>
        <Paper
          sx={{
            width: "20%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="p" component="p" align="center" mt={2}>
            Shops:
          </Typography>
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {drugsShops?.map((shop) => (
              <ListItem key={shop}>
                <Button
                  onClick={() => setShop(shop)}
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {shop}
                </Button>
              </ListItem>
            ))}
          </List>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="sort-by-select-label">Sort by</InputLabel>
            <Select
              labelId="sort-by-select"
              id="sort-by-select"
              value={sort}
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value="price-low-to-high">Price low to high</MenuItem>
              <MenuItem value="price-high-to-low">Price high to low</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </MediaQuery>
    </>
  );
};

export default Filters;
