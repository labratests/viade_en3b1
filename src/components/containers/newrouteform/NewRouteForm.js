import React, { Component } from 'react'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataForm from '../stepper/dataform/DataForm';
import ReviewForm from '../stepper/reviewform/ReviewForm';
import MapForm from '../stepper/mapform/MapForm';
import NavBar from '../../graphic interface/NavBar';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Grid from '@material-ui/core/Grid';
import SuccessForm from '../stepper/success/SuccessForm';
import { withStyles } from '@material-ui/styles';


export class NewRouteForm extends Component {

    state = {
        activeStep: 2,
        name: '',
        description: '',
        date: new Date(),
        photos: [],
        videos: [],
        points: []
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep + 1 });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep - 1 });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleDateChange = date => {
        this.setState({ date: date });
    }

    handleMediaChange = (selectorFiles: FileList, code) => { // this is not an error, is TypeScript
        switch (code) {
            case 0: // photos
                this.setState({ photos: selectorFiles });
                break;
            case 1: // videos
                this.setState({ videos: selectorFiles });
                break;
            default:
                alert('Invalid media code!!');
                console.log(code)
                break;
        }
    }

    handleMapPoints = points => {
        this.setState({ points: points })
    }

    render() {

        const { activeStep } = this.state;
        const { name, description, date, photos, videos } = this.state;
        const values = { activeStep, name, description, date, photos, videos };

        const { classes } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <NavBar />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <FilterHdrIcon fontSize="large" />
                            </Avatar>

                            <Typography component="h1" variant="h4" align="center">
                                Create your own route
                    </Typography>

                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <SuccessForm />
                                ) : (
                                        <React.Fragment>
                                            {getStepContent(activeStep,
                                                values,
                                                this.handleNext,
                                                this.handleBack,
                                                this.handleChange,
                                                this.handleDateChange,
                                                this.handleMediaChange,
                                                this.handleMapPoints
                                            )}

                                        </React.Fragment>
                                    )}
                            </React.Fragment>
                        </Paper>
                    </main>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const steps = ['Basic data', 'Map', 'Review your route'];

function getStepContent(step, values, handleNext, handleBack, handleChange, handleDateChange, handleMediaChange, handleMapPoints) {
    switch (step) {
        case 0:
            return <DataForm
                handleNext={handleNext}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                handleMediaChange={handleMediaChange}
                values={values}
            />;
        case 1:
            return <MapForm
                handleNext={handleNext}
                handleBack={handleBack}
                handleMapPoints={handleMapPoints}
                values={values}
            />;
        case 2:
            return <ReviewForm
                handleNext={handleNext}
                handleBack={handleBack}
                values={values}
            />;
        case 3:
            return <SuccessForm />;
        default:
            throw new Error('Unknown step');
    }
}

const useStyles = theme => ({
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
});

export default withStyles(useStyles)(NewRouteForm);