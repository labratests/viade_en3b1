import React, { Component } from 'react'
import { Typography, Grid, Button, TextField } from '@material-ui/core'

export class ReviewForm extends Component {

    next = e => {
        e.preventDefault();
        this.props.handleNext();
    }

    back = e => {
        e.preventDefault();
        this.props.handleBack();
    }

    render() {

        const { values } = this.props;

        var month = values.date.getUTCMonth() + 1; //months from 1-12
        var day = values.date.getUTCDate();
        var year = values.date.getUTCFullYear();

        const date = month + "/" + day + "/" + year;

        const points = values.points;

        // points.forEach( p => console.log(p))

        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Please, review all the data
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} style={{ marginTop: 16 }}>
                            <TextField
                                disabled
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                defaultValue={values.name}
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} style={{ marginTop: 16 }}>
                            <TextField
                                disabled
                                id="date"
                                name="date"
                                label="Date"
                                fullWidth
                                defaultValue={date}
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                disabled
                                id="description"
                                name="description"
                                label="Description"
                                multiline
                                fullWidth
                                defaultValue={values.description}
                                rows="4"
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                disabled
                                id="mapPoint"
                                name="mapPoint"
                                label="Track Points"
                                multiline
                                fullWidth
                                defaultValue={values.points}
                                rows="4"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>

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
                </React.Fragment>
            </div>
        )
    }
}

export default ReviewForm
