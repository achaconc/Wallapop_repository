import React, { useState, useEffect } from 'react';
import './FavouriteItemList.scss';
import {fetchFavouriteFilteredItems} from '../../services/itemServices';
import {
  IconButton,
  Box,
  Grid,
  useMediaQuery,
  Paper,
  Typography,
  Fab,
  InputBase
} from '@mui/material';
import {
  DeleteOutline,
  Search
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const FavouriteItemList = (props) => {

  const [favouriteFilterEntered, setFavouriteFiterEntered] = useState();
  const [favouriteFiterItems, setFavouriteFiterItems] = useState(props.items);
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const xsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const searchFilterHandler = (event) => setFavouriteFiterEntered(event.target.value);

  useEffect(() => {
        fetchFavouriteFilteredItems(favouriteFilterEntered, props.items, setFavouriteFiterItems);
  },[favouriteFilterEntered, props.items]);

  return (
    <Box>
      <Box className="search_container">
        <Box className="search-icon-wrapper">
          <IconButton>
            <Search/>
          </IconButton>
        </Box>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={searchFilterHandler}
        />
      </Box>
      <Grid className="favourite-list_component" container spacing={2}>
        {favouriteFiterItems.map((item, index) => (
          <Grid key={item.id} className="favourite_container" item xs={ mdScreen ? xsScreen ? 12 : 6 : 3}>
            <Paper elevation={3} >
              <Fab className="fovourite_delete" size="small" aria-label="delete"  onClick={() => props.onRemoveItem(item.id)}>
                <DeleteOutline/>
              </Fab>
              <img className="favorite_image" alt="complex" src={item.image} />
              <Typography className="favourite_title" variant="body1" align="center" component="div">
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
       </Grid>
    </Box>
  );
};

export default FavouriteItemList;
