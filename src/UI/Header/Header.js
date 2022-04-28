import React, {useState} from 'react';
import './Header.scss';
import {
  AppBar,
  Container,
  IconButton,
  Typography,
  Toolbar,
  InputBase,
  Box,
  Button,
  MenuItem,
  Divider,
  Menu,
  Fade
} from '@mui/material';
import {
  Search
 } from '@mui/icons-material';

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const sortHandler = (mode, field) => {
    props.onSortItem(mode, field);
    setAnchorEl(null);
    closeHandler();
  };

  const closeHandler = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WALLAPlus
            </Typography>
            <Box className="search_container">
              <Box className="search-icon-wrapper">
                <IconButton onClick={props.onSearchItem}>
                  <Search/>
                </IconButton>
              </Box>
              <InputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={props.onSearchItem}
              />
            </Box>
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}>
                Ordenar
              </Button>
              <Menu id="demo-customized-button"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={closeHandler}
                TransitionComponent={Fade}>
                  <MenuItem  onClick={() => sortHandler("ASC", "title")} disableRipple>
                    Título Ascedente
                  </MenuItem>
                  <MenuItem onClick={() => sortHandler("DESC", "title")} disableRipple>
                    Título Descendente
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={() => sortHandler("ASC", "description")} disableRipple>
                    Descripción Ascedente
                  </MenuItem>
                  <MenuItem onClick={() => sortHandler("DESC", "description")} disableRipple>
                    Descripción Descendente
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={() => sortHandler("ASC", "email")} disableRipple>
                    Email Ascedente
                  </MenuItem>
                  <MenuItem onClick={() => sortHandler("DESC", "email")} disableRipple>
                    Email Descendente
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={( ) => sortHandler("ASC", "price")} disableRipple>
                    Precio Ascedente
                  </MenuItem>
                  <MenuItem onClick={() => sortHandler("DESC", "price")} disableRipple>
                    Precio Descendente
                  </MenuItem>
                </Menu>
              </div>
              <Button
                variant="contained"
                disableElevation
                onClick={props.onHandleOpen}>
                Favoritos
              </Button>
          </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
