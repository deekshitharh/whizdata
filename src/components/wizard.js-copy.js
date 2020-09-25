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
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Collapse from "@material-ui/core/Collapse";
const img = require("../images/sport.jpg")
let img1 = require("../images/1.svg");
const cards = [
  {
    id: 1,
    title: "Sports",
    desc: "Automation solution for a state affiliated sports body",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged  more...",
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
    desc: "Resource management system for engineering  company",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/1.svg")
  },
  {
    id: 3,
    title: " Food Industry",

    desc: " Operation automation  system for a food industry platform",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,remaining essentially unchanged more...",
    checked: false,
    img: require("../images/1.svg")
  },
  {
    id: 4,
    title: " Management platform",
    desc: "Consumer service  system for a management platform",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/1.svg")
  }
  // {
  //   id: 5,
  //   title: "Solar power-plant system",
  //   desc: "Reporting/dashboard/analytics for a solar power-plant",
  //   subdesc:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged more...",
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
  // handleChange = id => {
  //   let cards = this.state.cardArr;
  //   cards.find(c => {
  //     if (c.id === id) {
  //       // c.checked = !c.checked;
  //       // this.setState({ cardAr: cards });
  //        this.setState(prevState => ({
  //          checked: !prevState.checked
  //        }));
  //     }
  //   });

  //   this.setState({ cardArr: cards });
  //   // this.setState({ checked: !this.state.checked });
  // };
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
                          md={3}
                        >
                          <Card
                            id={value.id}
                            className={
                              classes.outercard + " " + classes.marginstyle
                            }
                          >
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                component="img"
                                alt="Contemplative Reptile"
                                //  height="150"
                                image={value.img}
                              />
                            </CardActionArea>
                            <CardContent>
                              <Typography
                                // className={
                                //   classes.sectionheading +
                                //   "  " +
                                //   classes.fontfamily
                                // }
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
                                className={classes.button}
                              >
                                {value.checked ? "View less" : " View more"}
                              </Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      );
                    })}
                    {/* <Grid item xs={12} md={3}>





                    </Grid> */}
                  </Grid>

                  {/* <Grid container spacing={3}>
                    <Grid
                      // container

                      className={classes.layergrid}
                      item
                      md={3}
                    >
                      <Card className={classes.gridbg}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Contemplative Reptile"
                            height="500"
                            image={img}
                          />
                        </CardActionArea>

                        <CardContent>
                          <Typography
                            className={
                              classes.sectionheading + "  " + classes.fontfamily
                            }
                            gutterBottom
                            variant="body1"
                          >
                            {" "}
                            <b>
                              {" "}
                              "Resource management system for engineering
                              services company",
                            </b>
                          </Typography>
                          <Typography
                            gutterBottom
                            className={
                              classes.content + " " + classes.fontcolor
                            }
                          >
                            {" "}
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, remaining
                            essentially unchanged more...",
                          </Typography>
                        </CardContent>

                        <Collapse in={checked}>
                          <CardContent>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={
                                classes.content + " " + classes.fontcolor
                              }
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={
                                classes.content + " " + classes.fontcolor
                              }
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </Typography>
                          </CardContent>
                        </Collapse>

                        <CardActions className={classes.buttonend}>
                          <Button
                            checked={checked}
                            onClick={this.handleChange(1)}
                            id={1}
                            className={classes.button}
                          >
                            {checked ? "View less" : " View more"}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>

                    <Grid
                      // container

                      className={classes.layergrid}
                      item
                      md={3}
                    >
                      <Card className={classes.gridbg}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Contemplative Reptile"
                            height="500"
                            image={img}
                          />
                        </CardActionArea>

                        <CardContent>
                          <Typography
                            className={
                              classes.sectionheading + "  " + classes.fontfamily
                            }
                            gutterBottom
                            variant="body1"
                          >
                            {" "}
                            <b>
                              {" "}
                              "Resource management system for engineering
                              services company",
                            </b>
                          </Typography>
                          <Typography
                            gutterBottom
                            className={
                              classes.content + " " + classes.fontcolor
                            }
                          >
                            {" "}
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, remaining
                            essentially unchanged more...",
                          </Typography>
                        </CardContent>

                        <Collapse in={checked}>
                          <CardContent>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={
                                classes.content + " " + classes.fontcolor
                              }
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={
                                classes.content + " " + classes.fontcolor
                              }
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </Typography>
                          </CardContent>
                        </Collapse>

                        <CardActions className={classes.buttonend}>
                          <Button
                            checked={checked}
                            id={2}
                            onClick={this.handleChange(2)}
                            className={classes.button}
                          >
                            {checked ? "View less" : " View more"}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid> */}
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
