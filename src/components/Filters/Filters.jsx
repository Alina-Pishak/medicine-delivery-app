/* eslint-disable react/prop-types */
import {
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

const Filters = ({ setShop, setSort, sort }) => {
  const { data: drugsShops } = useGetDrugsShopsQuery();
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Paper
      sx={{
        width: "20%",
        maxHeight: "400px",
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
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-by-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-select"
          id="sort-by-select"
          value={sort}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value="cheap">Price low to high</MenuItem>
          <MenuItem value="expensive">Price high to low</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default Filters;
