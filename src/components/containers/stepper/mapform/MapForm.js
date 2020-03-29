import React, { Component } from 'react'
import EditableMap from '../../../map/EditableMap'
import { Button, Typography, Grid } from '@material-ui/core'

export class MapForm extends Component {

    constructor() {
		super();
        this.points = React.createRef();
	}

    next = e => {
        e.preventDefault();
        if(this.points.current.getTrackPoints() === 'undefined' || this.points.current.getTrackPoints()  == 0){
            alert('You must select at least one track point!!');
            return;
        }
        this.props.handleNext();
        this.props.handleMapPoints(this.points.current.getTrackPoints());
    }

    back = e => {
        e.preventDefault();
        this.props.handleBack();
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Click on the map to add trackpoints to your route
                </Typography>
                <form onSubmit={this.next}>
                    <EditableMap ref={this.points} />

                    <Grid container spacing={3} style={{marginTop: 12}}>
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

