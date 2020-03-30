import React, { Component } from 'react'
import EditableMap from '../../../map/EditableMap'
import { Button, Typography, Grid, Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

export class MapForm extends Component {

    constructor() {
        super();
        this.points = React.createRef();
        this.state = {
            open: false,
            message: "",
            vertical: 'top',
            horizontal: 'center',
        }
    }

    next = e => {
        e.preventDefault();
        if (this.points.current.getTrackPoints() === 'undefined' || this.points.current.getTrackPoints().length == 0) {
            // alert('You must select at least one track point!!');
            this.handleClick("You must select at least one track point!!");
            return;
        }
        this.props.handleNext();
        this.props.handleMapPoints(this.points.current.getTrackPoints());
    }

    back = e => {
        e.preventDefault();
        this.props.handleBack();
    }

    handleClick = (text) => {
        this.setState({ open: true,
                        message: text });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, message } = this.state;
        const { vertical, horizontal } = this.state;

        return (
            <React.Fragment>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    message={message}
                    action={
                        <React.Fragment>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </React.Fragment>
                    }
                />
                <Typography variant="h6" gutterBottom>
                    Click on the map to add trackpoints to your route
                </Typography>

                <form onSubmit={this.next}>
                    <EditableMap ref={this.points} handleClick={this.handleClick} />

                    <Grid container spacing={3} style={{ marginTop: 12 }}>
                        <Button
                            variant="contained"
                            color="default"
                            style={{
                                marginTop: 12,
                                marginLeft: '1vh'
                            }}
                            type="submit"
                            onClick={this.back}
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: 12,
                                marginLeft: 'auto'
                            }}
                            type="submit"
                        >
                            Next
                        </Button>
                    </Grid>
                </form>
            </React.Fragment>
        )
    }
}

export default MapForm

