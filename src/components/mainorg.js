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
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Topbar from "./Topbar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/Footer";
import Paper from "@material-ui/core/Paper";
import SwapVertOutlinedIcon from "@material-ui/icons/SwapVertOutlined";
import "whatwg-fetch";

import fields from "./common/formdata.js";
import Slider from "react-slick";
const poductlogo = [
  // {
  //   src: require("../images/nodejs.png")
  // },
  // {
  //   src: require("../images/react.png")
  // },
  // {
  //   src: require("../images/java.png")
  // },
  // {
  //   src: require("../images/c++.png")
  // },

  // {
  //   src: require("../images/python.png")
  // }

  // {
  //   name: "node",
  //   src: require("../images/abb.png")
  // },

  // {
  //   name: "react",
  //   src: require("../images/teva.png")
  // },
  // {
  //   name: "java",
  //   src: require("../images/tt.png")
  // },

  {
    name: "java",
    src: require("../images/11sports.png")
  },
  {
    name: "java",
    src: require("../images/abb.png")
  },

  {
    name: "java",
    src: require("../images/aptta.png")
  },
  {
    name: "java",
    src: require("../images/vertex.png")
  },
  {
    name: "java",
    src: require("../images/imshealth.png")
  },
  {
    name: "java",
    src: require("../images/bfi.png")
  },
  {
    name: "java",
    src: require("../images/teva.png")
  },
  {
    name: "java",
    src: require("../images/ttmarathon.png")
  }
];

const cardtemplate = [
  {
    id: 1,
    directto: "/offerings",
    img: require("../images/1.svg"),
    heading: "Core Offering",
    subheading:
      " Any business operation you study today reveals some scope for introducing IT system to supplement the human efficiency."
  },

  {
    id: 2,
    directto: "/aproch-to-work",
    img: require("../images/6.svg"),
    heading: "  Approach to work",
    subheading:
      " Our experience in design , test automation and model engineering brings in some of the best systems into practice at Whizdata."
  },
  {
    id: 3,
    img: require("../images/5.svg"),
    heading: " Case Studies ",
    subheading:
      "Our projects span across multiple domains. Some are businesses where high-tech adoption is a challenge. and we gladly accept it. "
  },

  {
    id: 4,
    directto: "/baseline-characteristics",
    img: require("../images/4.svg"),
    heading: " Baseline characteristics ",
    subheading:
      "The risk of designing everything from scratch is down tremendously, because the building blocks are home-grown, well-tested parts."
  }
];

class Main extends Component {
  state = {
    open: false,
    reqmsg: false,
    checked: true,
    requestStatus: "",
    formdata: [],
    activeStep: 0,
    click: false,
    cards: cardtemplate
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
    this.resetForm();
  };

  handleChange = e => {
    const formvalues = [...this.state.formdata];

    formvalues.find(el => {
      if (el.id === e.target.id) el.value = e.target.value;
    });

    this.setState({ formdata: formvalues });
  };

  handleFormSubmit = e => {
    const formvalues = [...this.state.formdata];

    formvalues.map(el => {
      el.error = "";
      const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

      if (el.id == "Email" && el.value.match(emailRegEx)) {
        el.error = "";
      } else if (el.id == "date" || el.id == "time") {
        if (el.value.length == 0) el.error = el.defMsg;
      } else if (el.id == "pnumber" && el.value.length === 10) el.error = "";
      else el.error = el.defMsg;
    });

    this.setState({ formdata: formvalues });

    const errorval = this.state.formdata.find(el => {
      if (el.error && el.error.length > 0) {
        return true;
      } else {
        return false;
      }
    });

    if (!errorval) {
      fetch(
        " http://test5s.in/contactus.php",
        {
          method: "POST",

          body: JSON.stringify(this.state.formData),
          data: JSON.stringify(this.state.formData)
        },
        { timeout: 5000 }
      )
        .then(response => response.json())
        .then(data => {
          // console.log("data .. " + JSON.stringify(data));
          if (data.recordAdded) {
            this.setState({
              // emailresponse: "Mail sent",
              reqmsg: true,
              requestStatus: "Email sent our team will soon contact you"
            });

            this.resetForm();
          }
        })

        .catch(error => {
          console.error(error);
          this.setState({
            reqmsg: false,
            requestStatus: "Error occured.Please try after sometime!!!"
          });

          this.resetForm();
        });
    }
  };

  render() {
    const { classes } = this.props;
    const { open, cards, requestStatus, reqmsg, formdata } = this.state;

    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      cssEase: "linear",
      arrows: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <CssBaseline />

        <Topbar />

        <div className={classes.root}>
          <Grid className={classes.herobannergrid} container>
            <img alt="" className={classes.herobanner}></img>

            <Typography variant="h6" className={classes.herotext}>
              Improve your digital presence <br />
              internally and to your external ecosystem
            </Typography>
          </Grid>
          {/* <div className={classes.subgrid}> */}
          <Paper className={classes.wizpaper}>
            <Grid container spacing={3}>
              {cards.map((carddata, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    md={3}
                    sm={6}
                    // style={{ position: "relative" }}
                    className={classes.layergrid}
                  >
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={carddata.img}
                        />
                      </CardActionArea>
                      <CardContent className={classes.cardtext}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {carddata.heading}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {carddata.subheading}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.actionCard}>
                        {carddata.id == 3 ? (
                          <React.Fragment>
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
                          </React.Fragment>
                        ) : (
                          <CardActions className={classes.actionCard}>
                            <Button
                              className={classes.actionButtom}
                              to={carddata.directto}
                              component={Link}
                              size="small"
                            >
                              <b> Learn more</b>
                            </Button>
                          </CardActions>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            {/* <Grid
              container
              style={{
                marginTop: 10,

                position: "relative",
                zIndex: 0,
                backgroundColor: "#00CCFF",
                height: 400
              }}
            >
              <Grid
                container
                style={{
                  position: "absolute",
                  zIndex: 1,

                  top: 40,
                  left: "45%"
                }}
              >
                <Grid  item md={6}>
                  <Paper style={{ backgroundColor: "pink" }}>
                    <Typography>
                      At Whizdata, we use a number of internally developed CASE
                      tools, code-generators, compilers, regression QA scripts,
                      functional and stress testing stack etc to reduce human
                      errors and improve delivery efficiency. When building
                      software, we use the method of short iterations which
                      assumes that even at the very beginning of the development
                      cycle, the delivered features are QA-ed and ready for
                      customer's inspection. Our methodology allows us to
                      identify discrepancies between customer expectations and
                      our understanding at early stages and provide the fixes
                      early in the project cycle. We use modern refactoring
                      techniques to keep the architecture of applications simple
                      and easy to re-use. Working with various Enterprise
                      applications, we have acquired a wide variety of system
                      acquaintance that has helped us in improving performance
                      our solution. With our expertise, we are able to tune the
                      performance of enterprise applications at all layers,
                      starting from the web browser down to the level of data
                      queries and access controls.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} >
                  <Paper style={{ backgroundColor: "red"  , textAlign:"center", height:100}}>
                  <Typography>
                    OUR BEST PRACTICES IN SOFTWARE DEVELOPMENT
                  </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid> */}
            <Paper className={classes.wizpaper}>
              <Grid container alignItems="center" justify="center">
                <Grid>
                  <Typography className={classes.sectionheading}>
                    <b>OUR BEST PRACTICES IN SOFTWARE DEVELOPMENT</b>
                  </Typography>
                </Grid>

                <Grid item md={12}>
                  <Typography
                    variant="body1"
                    className={classes.content}
                    gutterBottom
                  >
                    Whizdata uses advanced tools, technologies and methodologies
                    for software development. The main stream of our software
                    development activities is formed by a stack of NodeJS and
                    other Javascript platform. All of our employees have been
                    trained to use these software tools efficiently, with
                    simplicity and scalability in mind.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.content}
                    gutterBottom
                  >
                    At Whizdata, we use a number of internally developed CASE
                    tools, code-generators, compilers, regression QA scripts,
                    functional and stress testing stack etc to reduce human
                    errors and improve delivery efficiency. When building
                    software, we use the method of short iterations which
                    assumes that even at the very beginning of the development
                    cycle, the delivered features are QA-ed and ready for
                    customer's inspection. Our methodology allows us to identify
                    discrepancies between customer expectations and our
                    understanding at early stages and provide the fixes early in
                    the project cycle. We use modern refactoring techniques to
                    keep the architecture of applications simple and easy to
                    re-use. Working with various Enterprise applications, we
                    have acquired a wide variety of system acquaintance that has
                    helped us in improving performance our solution. With our
                    expertise, we are able to tune the performance of enterprise
                    applications at all layers, starting from the web browser
                    down to the level of data queries and access controls.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.content}
                    gutterBottom
                  >
                    Our software engineers, analysts, QA engineers and project
                    managers closely communicate with our customers proactively
                    handling potential changes of requirements, which makes our
                    process smooth and adaptive and leads to customer
                    satisfaction. By using our experience and modern software
                    development methodologies, we offer our customers an
                    effective and scalable enterprise solution that will truly
                    bring efficiency into their operations though improved
                    operational digital content.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.wizpaper}>
              <Grid container alignItems="center" justify="center">
                <Grid item md={4} xs={12} className={classes.sectionheading}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Our Happy Clients
                  </Typography>
                </Grid>

                <Grid item md={8} xs={12}>
                  <Slider {...settings}>
                    {poductlogo.map(index => {
                      return (
                        <div className={classes.slickslider1} key={index.name}>
                          <img
                            src={index.src}
                            alt=""
                            style={{ display: "block", margin: "0 auto" }}
                          ></img>
                        </div>
                      );
                    })}
                  </Slider>
                </Grid>
              </Grid>
            </Paper>
          </Paper>

          <AppBar position="static" className={classes.footer}>
            <Toolbar style={{ minHeight: 40 }}>
              <Grid
                justify="space-between"
                display="flex"
                className={classes.centeredgrid}
                container
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    component="h2"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    ⓒ Copyright whizdata, All rights reserved
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    gutterBottom
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    For enquiry contact us at sales@whizdata.in
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
        {/* </div> */}

        <Dialog
          open={open}
          fullWidth
          onClose={this.dialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          scroll="body"
        >
          <DialogTitle
            className={classes.formheader}
            id="customized-dialog-title"
          >
            <Typography variant="h6">
              <b> When to Contact</b>
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form noValidate autoComplete="off">
              {formdata.map((formval, index) => {
                return (
                  <div key={index}>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      multiline={formval.multiline ? formval.multiline : false}
                      error={formval.error ? true : false}
                      helperText={formval.error}
                      id={formval.id}
                      rows={formval.rows ? formval.rows : ""}
                      value={formval.value}
                      onChange={this.handleChange}
                      label={formval.label}
                      type={formval.type}
                      InputLabelProps={{
                        shrink: true,
                        classes: {
                          root: classes.label,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{ classes: { underline: classes.underline } }}
                    />
                  </div>
                );
              })}
            </form>
            <Button
              onClick={this.handleFormSubmit}
              variant="outlined"
              size="small"
              className={classes.actionButton}
            >
              Submit
            </Button>
            <Typography color={reqmsg ? "green" : "error"}>
              <b></b>
              {requestStatus}
            </Typography>
          </DialogContent>

          <DialogActions>
            {" "}
            <Button className={classes.actionButtom} onClick={this.dialogClose}>
              Back
            </Button>
          </DialogActions>
        </Dialog>

        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles())(Main));
