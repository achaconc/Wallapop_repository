import React, {useState, useEffect} from 'react';
import Header from './UI/Header/Header';
import Content from './UI/Content/Content';
import {fetchFilteredItems, fetchPaginatedItems} from './services/itemServices';
import {
Pagination,
Stack
} from '@mui/material';

const App = () => {

  const [favouriteItems, setFavouriteItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [filterEntered, setFilterEntered] = useState("");
  const [orderClause, setOrderClause] = useState(null);
  const [open, setOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState(null);

  const changePageHandler = (event, value) => {
    fetchPaginatedItems(value, filteredItems, setCurrentPageItems);
    setPageSelected(value);
  }

  const favouriteItemsAddHandler = (item, isChecked) => {
    const parsedItem = {
      id: item.id,
      title: item.title,
      image: item.image
    }
    if(!isChecked) {
      setFavouriteItems((prevState)=> {
        const index = prevState.filter(i => i.id !== parsedItem.id);
        return index;
      });
    }
    else {
      setFavouriteItems((prevState)=> {
        return [
          ...prevState,
          { id: item.id, title: item.title, image: item.image}
        ]
      });
    }
  }

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const searchFilterHandler = (event) => setFilterEntered(event.target.value);

const removeItemHandler = (id) => {
  const list = favouriteItems.filter((item) => item.id !== id);
  setFavouriteItems(list);
};

const sortItemHandler = (mode, field) => {
  setOrderClause({mode, field});
};

useEffect(() => {
  fetchFilteredItems(orderClause, filterEntered, null, setFilteredItems, setCurrentPageItems);
  if (pageSelected!== 1)
    setPageSelected(1);
},[filterEntered]);

useEffect(() => {
  fetchFilteredItems(orderClause, filterEntered, filteredItems, setFilteredItems, setCurrentPageItems);
  if (pageSelected!== 1)
    setPageSelected(1);
},[orderClause]);

  return (
    <div className="App">
      <Header
        onHandleOpen={handleOpen}
        onSearchItem={searchFilterHandler}
        onSortItem={sortItemHandler}/>
      <Content
        favouriteItemsAddHandler={favouriteItemsAddHandler}
        open={open}
        handleClose={handleClose}
        favouriteItems={favouriteItems}
        items={currentPageItems}
        removeItemHandler={removeItemHandler}
      />
      <Stack spacing={2}>
        <Pagination
          page={pageSelected}
          count={filteredItems ? Math.ceil(filteredItems.length/5) : 1}
          color="primary"
          onChange={changePageHandler}/>
      </Stack>
    </div>
  );
}

export default App;
