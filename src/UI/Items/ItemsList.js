import React from 'react';
import './ItemsList.scss';
import Item from '../../components/Item/Item';
import {
  Grid,
  Typography,
  Checkbox
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder
} from '@mui/icons-material';

const ItemList = (props) => {



  const favouriteItemsChangeHandler = (event) => {
    const value = props.items.find((item) => item.id === event.target.value);
    const isChecked = event.target.checked;
    props.onFavouriteItemsChangeHandler(value, isChecked);
  }

  return (
      <ul className="list-component">
        {props.items && props.items.map((item, index) => (
          <Item key={"listItem"+index}>
          <Grid className="main_container" container spacing={2}>
            <Grid className="image_container" item>
                <img className="image" alt="complex" src={item.image} />
            </Grid>
            <Grid className="sub_conatiner" item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                  {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.email}
                  </Typography>
                  <Typography className="description_component" gutterBottom variant="subtitle1" component="div">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                      {item.price}€
                  </Typography>
                </Grid>
              <Grid item>
                <Checkbox
                  icon={<FavoriteBorder />}
                  value={item.id}
                  checkedIcon={<Favorite />}
                  onChange={favouriteItemsChangeHandler}/>
              </Grid>
              </Grid>
          </Grid>
        </Item>
        ))}
      </ul>
  );
};

export default ItemList;
