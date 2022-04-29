import { searchBy, sortBy } from '../components/Filter/Filter';
import { items } from '../data/Items';

export const fetchFilteredItems = (order, keyword, filteredItems, callbackFilter, callbackPagination) => {
  if (keyword && !filteredItems) {
    filteredItems = searchBy(items, keyword);
  }
  if (order) {
    const isNumber = order.field === 'price';
    filteredItems = sortBy(filteredItems ? [...filteredItems] : JSON.parse(JSON.stringify(items)), order.mode, order.field, isNumber);
  }
  const returnList = filteredItems ? filteredItems : items;
  callbackFilter(returnList);
  callbackPagination && callbackPagination(returnList.slice(0, 5));
}


export const fetchPaginatedItems = (page, filteredItems, callback) => {
  const currentPageItems = filteredItems.slice((page - 1) * 5, page * 5);
  callback(currentPageItems);
}


export const fetchFavouriteFilteredItems = (keyword, favouriteItems, callback) => {
  if (keyword && favouriteItems) {
    favouriteItems = searchBy(favouriteItems, keyword);
  }
  const favouriteList = favouriteItems ? favouriteItems : items;
  favouriteList && callback(favouriteList);
}
