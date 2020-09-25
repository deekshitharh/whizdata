import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import InstructionDialog from "./dialogs/InstructionDialog";
// import SwipeDialog from "./dialogs/SwipeDialog";
import { styles } from "./genric.js";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Topbar from "./Topbar";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/Footer";
let img1 = require("../images/1.svg");
let img2 = require("../images/6.svg");
let img3 = require("../images/5.svg");
let img4 = require("../images/4.svg");
import fields from "./common/formdata.js";

class Main extends Component {
  state = {
    open: false,
    requestStatus: "",
    formdata: []
  };

  componentDidMount() {
    let data = [...JSON.parse(JSON.stringify(fields))];
    this.setState({ formdata: data });
  }

  resetForm = () => {
    let data = [...JSON.parse(JSON.stringify(fields))];
    this.setState({ formdata: data });
  };

  openDialog = event => {
    this.setState({
      open: true
    });
  };

  dialogClose = event => {
    this.setState({
      open: false,
      requestStatus: ""
    });
  };

  handleChange = e => {
   
    const formvalues = [...this.state.formdata];
    console.log(e.target.id + " " + "hhvhfbv" + e.target.value);

    formvalues.find(el => {
      if (el.id === e.target.id) el.value = e.target.value;
    });

    console.log("formvalues .. " + JSON.stringify(formvalues));

    this.setState({ formdata: formvalues });
  };

  handleFormSubmit = e => {
    const formvalues = [...this.state.formdata];

    formvalues.map(el => {
      console.log(el.id + " " + el.value + " ... " + el.value.length);
      el.error = "";
      const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

      if (el.id == "Email" && el.value.match(emailRegEx)) {
        el.error = "";
      } else if (el.id == "date" || el.id == "time") {
        console.log(el.id + " ...  " + el.value);
        if (el.value.length == 0) el.error = el.defMsg;
      } else if (el.id == "pnumber" && el.value.length === 10) el.error = "";
      else el.error = el.defMsg;
    });
    console.log(this.state.formdata);

    this.setState({ formdata: formvalues });

    const x = this.state.formdata.find(el => {
      if (el.error && el.error.length > 0) {
        return true;
      } else {
        return false;
      }
    });

    console.log("x " + x);
    if (!x) {
      alert(1233);
      fetch(" http://test5s.in/contactus.php", {
        method: "POST",

        body: JSON.stringify(this.state.formData),
        data: JSON.stringify(this.state.formData)
      })
        .then(response => response.json())
        .then(data => {
          alert(123);
          // console.log("data .. " + JSON.stringify(data));
          if (data.recordAdded) {
            this.setState({
              // emailresponse: "Mail sent",

              requestStatus: "Email sent our team will soon contact you"
            });
            this.resetForm();
          }
        })

        .catch(error => {
          console.error(error);
          this.setState({
            open: true,
            requestStatus: "Oops error occured.Please try after sometime!!!!!!"
          });
        });
    }
  };

  render() {
    const { classes } = this.props;
    const { open, requestStatus, formdata } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid
            className={classes.herobannergrid}
            container
            item
            direction="column"
            justify="flex-end"
            // alignItems="right"
            xs={12}
            md={12}
          >
            <img alt="" className={classes.herobanner}></img>

            <Typography variant="h4" className={classes.herotext}>
              Improve your digital presence - internally and to your external
              ecosystem
            </Typography>
          </Grid>

          <div className={classes.container}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.cardLists}
          >
            <Grid item md={3} sm={6}>
              <Card className={classes.outercard}>
                <CardActionArea
                // classes={{
                //   focusHighlight: classes.focus
                // }}
                >
                  <CardMedia className={classes.media} image={img1} />
                </CardActionArea>
                <CardContent className={classes.cardtext}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Core Offering
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Any business operation you study today reveals some scope
                    for introducing IT system to supplement the human
                    efficiency.
                  </Typography>
                </CardContent>

                <CardActions className={classes.actionCard}>
                  <Button
                    size="small"
                    // variant="outlined"
                    className={classes.actionButtom}
                    to="/offerings"
                    component={Link}
                  >
                    <b>Learn more</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={3} sm={6}>
              <Card className={classes.outercard}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={img2} />
                </CardActionArea>
                <CardContent className={classes.cardtext}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Approach to work
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    size="small"
                  >
                    Our experience in design automation, test automation and
                    model engineering brings in some of the best systems into
                    practice at Whizdata.
                  </Typography>
                </CardContent>

                <CardActions className={classes.actionCard}>
                  <Button
                    className={classes.actionButtom}
                    to="/aproch-to-work"
                    component={Link}
                    size="small"
                  >
                    <b> Learn more</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={3} sm={6}>
              <Card className={classes.outercard}>
                <CardActionArea className={classes.actionCard}>
                  <CardMedia className={classes.media} image={img3} />
                </CardActionArea>
                <CardContent className={classes.cardtext}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Case Studies
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Our projects span across multiple domains. Some are
                    businesses where high-tech adoption is a challenge. and we
                    gladly accept it.
                  </Typography>
                </CardContent>

                <CardActions className={classes.actionCard}>
                  <Button
                    className={classes.casebutton}
                    to="/case-Studies"
                    component={Link}
                    size="small"
                  >
                    Case Studies
                  </Button>
                  <Button
                    onClick={this.openDialog}
                    className={classes.actionButtom}
                    size="small"
                  >
                    <b> Learn more</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={3} sm={6}>
              <Card className={classes.outercard}>
                <CardActionArea className={classes.actionCard}>
                  <CardMedia className={classes.media} image={img4} />
                </CardActionArea>
                <CardContent className={classes.cardtext}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Baseline characteristics
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The risk of designing everything from scratch is down
                    tremendously, because the building blocks are home-grown,
                    well-tested parts.
                  </Typography>
                </CardContent>

                <CardActions className={classes.actionCard}>
                  <Button
                    className={classes.actionButtom}
                    to="/baseline-characteristics"
                    component={Link}
                    size="small"
                  >
                    <b> Learn more</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
        </div>
        <Box display={{ xs: "block", sm: "block", lg: "none", md: "none" }}>
          <footer className={classes.footerclass}>
            <Footer />
          </footer>
        </Box>

        <div className={classes.root}>
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <footer
              style={{
                background: "#1a1a1a",
                color: "#929292",
                zIndex: "1600",
                bottom: 0,
                position: "fixed",
                width: "100%",
                marginTop: "100"
              }}
            >
              <Footer />
            </footer>
          </Box>
          <Dialog
            open={open}
            fullWidth
            onClose={this.dialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body"
          >
            <DialogTitle id="customized-dialog-title">
              <Typography>When to contact</Typography>
            </DialogTitle>
            <DialogContent>
              <form noValidate autoComplete="off">
                {formdata.map((formval, index) => {
                  return (
                    <div key={index}>
                      <TextField
                        fullWidth
                        multiline={
                          formval.multiline ? formval.multiline : false
                        }
                        error={formval.error ? true : false}
                        helperText={formval.error}
                        id={formval.id}
                        rows={formval.rows ? formval.rows : ""}
                        value={formval.value}
                        onChange={this.handleChange}
                        label={formval.label}
                        type={formval.type}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                  );
                })}
              </form>
              <Button onClick={this.handleFormSubmit}>Submit</Button>
              <Typography>{requestStatus}</Typography>
            </DialogContent>

            <DialogActions>
              {" "}
              <Button
                className={classes.actionButtom}
                onClick={this.dialogClose}
              >
                Back
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles())(Main));
