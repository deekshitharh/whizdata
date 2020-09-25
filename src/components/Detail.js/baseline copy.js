import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import { withRouter } from "react-router-dom";
const backgroundShape = require("../../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "100%"
  },
  innerpaper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    elevation: 10
    // marginLeft: "25%",
    // width: "75%"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },

  box: {
    marginBottom: 40,
    height: 80
  },
  boxFull: {
    marginBottom: 40,
    height: "100%"
  },
  referenceText: {
    fontStyle: "italic",
    fontSize: 16
  },
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    colour: "green"
  }
});

class Baseline extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={12}>
                <Paper className={classes.paper}>
                  {/* <div className={classes.box}> */}
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                    variant="body1"
                  >
                    Baseline charcteristics of our projects:
                  </Typography>
                  <Typography
                    component={"div"}
                    gutterBottom
                    className={classes.innertext}
                  >
                    <ul>
                      <li>Mostly non-technical users</li>
                      <li>
                        Sometimes, users have challenge in working with UI with
                        many steps
                      </li>
                      <li>
                        Application data arrives from multiple sources, and is
                        consumed by different people – and all of the people
                        need a different perspective
                      </li>
                      <li>
                        Reports have to lead to actions – not useless CxO
                        statistics!
                      </li>
                      <li>
                        Most solutions have ‘immediate need’ and have ‘limited
                        budget’
                      </li>
                      <li>
                        Needless to say – UX had to be creative and simple!
                      </li>
                    </ul>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Experience in designing complex systems Our value is best
                    explained through case-studies rather than claims or list of
                    skills we possess. To deliver a product that works from the
                    word ‘go’, we spend sufficient time to understand the
                    working and use this knowledge to do
                    ‘outcome-driven-development’. The end-users from your
                    organization are part of our development system, and we make
                    them experience the functions and screens before we freeze
                    on the software. The solution may need hardware, software
                    and may seem which brings us to a position of unique
                    advantage in offering solutions that may need different
                    systems to talk to each other. Library of partially
                    developed + evolving software assets: We have a library of
                    software modules, both in design and testing, which
                    minimizes the cost of ownership to you, our valued customer.
                    Having ready assets not only reduces cost, but the
                    availability of the assets and our experience in designing
                    and delivering them make the assets more implementable for
                    you in the form of a usable, long-lasting solution. The risk
                    of designing everything from scratch is down tremendously,
                    because the building blocks are home-grown, well-tested
                    parts. Overall, we work towards the common organizational
                    goal of applying technology to improve your organizational
                    efficiency with the least cost and hence improve
                    organizational performance.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles)(Baseline));
