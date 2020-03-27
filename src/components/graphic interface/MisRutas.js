import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, MenuItem, Paper, Popper, Grow, ClickAwayListener, MenuList, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import EditLocationIcon from '@material-ui/icons/EditLocation';

const MisRutas = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    return (
        <div>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                Mis Rutas
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className={classes.menu}>
                            <MenuList >

                                <MenuItem>
                                    <ListItemIcon>
                                        <ListIcon />
                                        <ListItemText primary="Ver Rutas" />
                                    </ListItemIcon>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <EditLocationIcon />
                                        <ListItemText primary="Crear Ruta" />
                                    </ListItemIcon>
                                </MenuItem>

                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 20,
      letterSpacing: 1,
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menu: {
      width: 150,
    }
  }));

export default MisRutas
