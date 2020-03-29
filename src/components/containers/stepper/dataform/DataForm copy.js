import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

function DataForm() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleSubmit = () => {

    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Please, introduce the following data for your new route
          </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} style={{ marginTop: 16 }}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="routename"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            required
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Description"
                        multiline
                        fullWidth
                        rows="4"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <input
                        accept="image/*"
                        style={{display: 'none'}}
                        id="media-photo"
                        multiple
                        type="file"
                    />
                    <label htmlFor="media-photo">
                        <Button variant="contained" color="default" component="span" startIcon={<AddAPhotoIcon />}>
                            Photos
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <input
                        accept="video/*"
                        style={{display: 'none'}}
                        id="media-video"
                        multiple
                        type="file"
                    />
                    <label htmlFor="media-video">
                        <Button variant="contained" color="default" component="span" startIcon={<CloudUploadIcon />}>
                            Videos
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <FormHelperText id="my-helper-text">Fields marked with (*) are mandatory.</FormHelperText>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default DataForm
