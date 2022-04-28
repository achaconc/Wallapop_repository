
  export const searchBy = (items, filterValue) => {
    filterValue.toLowerCase().trim();
    return items.filter((item)=> {
      const title = item.title ? item.title.toLowerCase().trim() : undefined;
      const description = item.description ? item.description.toLowerCase().trim() : undefined;
      const email = item.email? item.email.toLowerCase().trim() : undefined;
      return (title && title.includes(filterValue)) ||
             (description && description.includes(filterValue)) ||
             (email && email.includes(filterValue)) ||
             (item.price && item.price.includes(filterValue))}
    );

  }

  export const sortBy = (items, mode, field, isNumber) => {
     return items.sort((a, b) => {
        const fieldA = isNumber ? parseFloat(a[field]) : a[field].toLowerCase();
        const fieldB = isNumber ? parseFloat(b[field]) : b[field].toLowerCase();
        return sortItem(mode, fieldA, fieldB);
      });
   }


  const sortItem = (mode, a, b) => {
    if(mode === "ASC")
      return a > b ? 1 : -1;
    else
      return a > b ? -1 : 1;
  }
