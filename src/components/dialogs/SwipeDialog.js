import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BaseDialog from "./BaseDialog";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@material-ui/core/MobileStepper";
import { autoPlay } from "react-swipeable-views-utils";

const logo = require("../../images/whiz-data-logo.svg");

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Home Services",
    description:
      "Challenge: UX for computer illiterates who provide the requested services",
    imgPath: require("../../images/test.png")
  },
  {
    label: "Sport Connect",
    description: "Challenge: Automation for pro, easy-connect for the fans",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Food Industry",
    description:
      "Challenge: Reduce CxO information report time from few days to minutes, automate actions",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "Resource Management",
    description:
      "Challenge: up-to-date resource deployment & billing info for a high-tech services company",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const styles = theme => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    colour: "green"
  },
  stepsContainer: {
    marginLeft: 72,
    textAlign: "left",
    marginTop: 20,
    height: 65
  },
  bottomMargin: {
    marginBottom: theme.spacing(2)
  }
});

class SwipeDialog extends Component {
  state = {
    activeStep: 0,
    click: false
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };
  imageclick = () => {
    this.setState(prevState => ({
      click: true
    
    }));
  };
  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes } = this.props;
    const maxSteps = tutorialSteps.length;
    const { activeStep } = this.state;
    // let temp = { ...this.props };

    return (
      <BaseDialog {...this.props}>
        <div className={classes.container}>
          <div className={classes.gutterBottom}>
            <Link to="/dashboard">
              <img width={100} src={logo} alt="" />
            </Link>
          </div>
          <div>
            <AutoPlaySwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Link to="case-Studies">
                      <img
                        src={step.imgPath}
                        alt={step.label}

                        //className={classes.img}
                      />
                    </Link>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            />
          </div>
          <div className={classes.stepsContainer}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              {tutorialSteps[activeStep].label}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {tutorialSteps[activeStep].description}
            </Typography>
          </div>
          <div>
            <Button
              component={Link}
              to="/case-Studies"
              variant="contained"
              onClick={this.handleClose}
              color="primary"
              autoFocus
            >
              Details
            </Button>
          </div>
        </div>
      </BaseDialog>
    );
  }
}

export default withRouter(withStyles(styles)(SwipeDialog));
