import React from 'react';
import ItemList from '../Items/ItemsList';
import FavouriteItemList from '../FavouriteItems/FavouriteItemsList';
import {
  Card
} from '@mui/material';
import CustomizedDialog from '../../components/CustomizedDialog/CustomizedDialog';

const Content = (props) => {

  return (
    <div>
      <ItemList onFavouriteItemsChangeHandler={props.favouriteItemsAddHandler} favouriteItems={props.favouriteItems} items={props.items}/>
      <Card>
          <Card>
            <CustomizedDialog open={props.open} onClose={props.handleClose} title=" Tus Favoritos">
              <FavouriteItemList className="favourite-list_component" items={props.favouriteItems} onRemoveItem={props.removeItemHandler}/>
            </CustomizedDialog>
          </Card>
      </Card>
    </div>
  );
}

export default Content;
