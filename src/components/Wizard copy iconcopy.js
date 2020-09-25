import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import { styles } from "./genric.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Collapse from "@material-ui/core/Collapse";
import { textAlign } from "@material-ui/system";
const img = require("../images/sport.jpg")
let img1 = require("../images/1.svg");
const cards = [
  {
    id: 1,
    title: "Sports",
    iconclass: "fas fa-running",
    desc: "Automation solution for a state affiliated sports body",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.. ",
    checked: false,
    img: require("../images/1.svg"),
    contents: [
      {
        classname: "heading1",
        key: "TT",
        desc: ""
      },
      {
        classname: "heading1",
        key: "BD",
        desc: ""
      }
    ]
  },

  {
    id: 2,
    title: "  Resource management",
    iconclass: "fa fa-flag",
    desc: "Resource management system for engineering  company",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry..Lorem Ipsum is simply dummy text of the printing and typesetting industry.. ",
    checked: false,
    img: require("../images/1.svg")
  },
  {
    id: 3,
    title: " Food Industry",
    iconclass: "fa fa-flag",
    desc: " Operation automation  system for a food industry platform",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
    checked: false,
    img: require("../images/1.svg")
  },
  {
    id: 4,
    title: " Management platform",
    iconclass: "fa fa-flag",
    desc: "Consumer service  system for a management platform",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.. ",
    checked: false,
    img: require("../images/1.svg")
  }
  // {
  //   id: 5,
  //   title: "Solar power-plant system",
  //   desc: "Reporting/dashboard/analytics for a solar power-plant",
  //   subdesc:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //   checked: false,
  //   img: require("../images/solar.jpg")
  // }
];

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      cardArr: cards
    };
  }

  handleChange = id =>
  {
    
  this.setState(prevState => ({
    cardArr: prevState.cardArr.map(el =>
      el.id === id ? { ...el, checked: !el.checked} : el
    )
  }));
          
  };

  onClickproj1 = () => {
    window.location.href = "http://www.karnatakatt.com/";
  };
  onClickproj2 = () => {
    window.location.href = "https://www.basketballfederationindia.org/";
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const { cardArr } = this.state;
    const { checked } = this.state;
    const currentPath = this.props.location.pathname;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              className={classes.aboutbanner}
              container
              item
              direction="column"
              justify="flex-end"
              // alignItems="right"
              xs={12}
              md={12}
            >
              <img alt="" className={classes.headerimg}></img>
              <Typography variant="h6" className={classes.headertext}>
                Highlighted <span className={classes.highlightext}>Works</span>
              </Typography>
            </Grid>

            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid + " " + classes.subgrid}
            >
              <Grid item xs={12} md={12}>
                <Paper elavation={1} className={classes.paper}>
                  <Grid container spacing={3}>
                    {cardArr.map(value => {
                      return (
                        <Grid
                          // container

                          className={classes.layergrid}
                          item
                          key={value.id}
                          md={4}
                          sm={4}
                        >
                          <Card
                            id={value.id}
                            className={
                              classes.outercard + " " + classes.marginstyle
                            }
                          >
                            <CardActionArea
                              style={{
                                display: "flex"
                                // backgroundColor: "rgba(4, 10, 45, 0.87)"
                              }}
                            >
                              <CardActions>
                                <Icon
                                  className={value.iconclass}
                                  style={{
                                    fontSize: 40,
                                    width: "auto",
                                    color: "#000000",
                                    marginTop: 0,
                                    marginBottom: 0,
                                    paddingTop: 12,
                                    display: "inline-block",
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    width: 60,
                                    height: 60,
                                    backgroundColor: "#ffffff"
                                  }}
                                />
                              </CardActions>
                            </CardActionArea>
                            <CardContent>
                              <Typography
                                className={
                                  classes.sectionheading +
                                  "  " +
                                  classes.fontfamily
                                }
                                gutterBottom
                              >
                                {" "}
                                <b>{value.desc}</b>
                              </Typography>
                              <Typography
                                gutterBottom
                                className={
                                  classes.content + " " + classes.fontcolor
                                }
                              >
                                {value.subdesc}
                              </Typography>
                            </CardContent>

                            <Collapse in={value.checked}>
                              <CardContent>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                  className={
                                    classes.content + " " + classes.fontcolor
                                  }
                                >
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                  className={
                                    classes.content + " " + classes.fontcolor
                                  }
                                >
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </Typography>
                              </CardContent>
                            </Collapse>

                            <CardActions className={classes.buttonend}>
                              <Button
                                checked={value.checked}
                                onClick={() => this.handleChange(value.id)}
                                // className={classes.button}
                                className={classes.actionButtom}
                              >
                                {value.checked ? "Read less" : " read more"}
                              </Button>
                            </CardActions>
                            <CardActions>
                              <Icon className="fas fa-mobile-alt" />
                              <Icon className="fa fa-desktop" />
                              <Icon className="fa fa-cloud" />
                              <Icon className="fa fa-cloud-download" />
                              <Icon className="fa fa-paypal" />
                            </CardActions>
                          </Card>
                        </Grid>
                      );
                    })}
                    
                  </Grid>

              
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles("wizardstyles"))(Wizard));
