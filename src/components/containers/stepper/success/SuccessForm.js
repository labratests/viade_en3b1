import React from 'react'
import { Button, Grid } from '@material-ui/core'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function SuccessForm() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.grid}>
                <Grid item xs={12} sm={2}>
                    <DirectionsWalkIcon className={classes.icon} fontSize="large" style={{ fill: "orange" }} />
                </Grid>
                <Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Route created
                                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            Your new track was succesfully created and saved
                                            </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.warning.main,
    },
    icon: {
        width: 65,
        height: 65,
    },
    grid: {
        marginLeft: theme.spacing(2),
    }
}));
