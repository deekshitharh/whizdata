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

import Collapse from "@material-ui/core/Collapse";

const wizardstyles = (theme, inner) =>
  inner === "wizardstyles"
    ? {
        outergrid: {
          position: "relative"
        },
        button: {
          fontSize: 15,
          color: "#ffffff",
          border: "1px solid #ff0000a1",
          width: 110,
          marginBottom: 11,
          marginRight: 50,

          border: "1px solid #ff0000a1",

          backgroundColor: "rgba(217, 0, 0, 0.1)",
          padding: 2
        },
        buttonend: {
          justifyContent: "flex-end",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "start"
          }
        },

        innergrid: {
          position: "absolute",
          top: 130,
          [theme.breakpoints.down("md")]: {
            top: 200
          }
        },
        fontfamily: {
          fontFamily: " Comic Sans MS , cursive, sans-serif",
          color: "#ffffff",
          fontSize: 25
        },
        gridbg: {
          backgroundColor: "rgba(0, 0, 0, 0.93)"
        },
        fontcolor: {
          color: "#ffffff"
        },
        card: {},
        root: {
          flexGrow: 1,
          overflow: "hidden"
          // background: `url(${backgroundShape}) no-repeat`,
          // backgroundPosition: "0 400px",
          // paddingBottom: 200
        },

        subgrid: {
          position: "absolute",
          top: 130,
          [theme.breakpoints.down("md")]: {
            top: 200
          }
        },
        projectheader: {
          left: 2,
          color: "#ffffff",
          width: "70%",
          bottom: "45%",
          position: "absolute",
          fontSize: 45,
          background: "rgba(0, 0, 0, 0.5)",
          lineHeight: 1,
          [theme.breakpoints.down("xs")]: {
            fontSize: 30,
            width: "75%",
            left: 0
          }
        },

        headertext: {
          position: "absolute",
          // bottom: "40%",
          // left: 16,
          // fontSize: 30,
          fontSize: 40,
          color: "#ffffff",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.only("xs")]: {
            fontSize: 12
          },
          [theme.breakpoints.down("md")]: {
            fontSize: 25
          }
        },

        root: {
          overflow: "hidden",

          backgroundSize: "cover",
          backgroundPosition: "0 400px"
        },
        imagecard: {
          position: "relative"
        },

        headerimg: {
          //  width: "100%",

          background: `url(${animationimage})  center bottom no-repeat `,

          height: 400,

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `calc(100vw + 48px)`,
          margin: -24
        },

        // grid: {
        //   margin: `0 ${theme.spacing(2)}px`
        // }
        layergrid: {
          marginBottom: 30
        },

        paper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          height: "100%",
          paddingRight: 18,
          [theme.breakpoints.down("sm")]: {
            paddingRight: 24
          }
          // height: 300
        }
      }
    : {};


const cards = [
  {
    id: 1,
    title: "Sports",
    desc: "Automation solution for a state affiliated professional sports body",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged  more...",
    checked: false,
    img: require("../images/sport.jpg"),
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
    desc:
      "Resource management system for formargin-sensitive engineering services company",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/resource.jpg")
  },
  {
    id: 3,
    title: " Food Industry",

    desc: " Operation automation for a food industry",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/food.jpg")
  },
  {
    id: 4,
    title: " Management platform",
    desc: "Consumer service management platform",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/management.jpg")
  },
  {
    id: 5,
    title: "Solar power-plant system",
    desc: "Reporting/dashboard/analytics for a solar power-plant",
    subdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged more...",
    checked: false,
    img: require("../images/solar.jpg")
  }
];

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      cardArr: cards
    };
  }
  handleChange = id => {
    let cards = this.state.cardArr;
    cards.find(c => {
      if (c.id === id) {
        c.checked = !c.checked;
        this.setState({ cardAr: cards });
      }
    });

    this.setState({ cardArr: cards });
    // this.setState({ checked: !this.state.checked });
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
                Our Works
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
                  {cardArr.map(value => {
                    return (
                      <Grid
                        container
                        justify="center"
                        className={classes.layergrid}
                        item
                        key={value.id}
                        md={12}
                        spacing={1}
                      >
                        <Card
                          id={value.id}
                          className={classes.card + "  " + classes.gridbg}
                        >
                          <Grid container item xs={12} md={12}>
                            <Grid
                              item
                              xs={12}
                              md={6}
                              className={classes.imagecard}
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  alt="Contemplative Reptile"
                                  height="300"
                                  image={value.img}
                                />
                              </CardActionArea>
                              <div className={classes.projectheader}>
                                {value.title}
                              </div>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <CardActionArea
                                checked={value.checked}
                                onClick={() => this.handleChange(value.id)}
                              >
                                <CardContent>
                                  <Typography
                                    className={
                                      classes.sectionheading +
                                      "  " +
                                      classes.fontfamily
                                    }
                                    gutterBottom
                                    variant="body1"
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
                              </CardActionArea>
                            </Grid>
                          </Grid>

                          <Collapse in={value.checked}>
                            <CardContent>
                              {/* <Typography gutterBottom variant="h5" component="h2">
                            Sports
                          </Typography> */}
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={
                                  classes.content + " " + classes.fontcolor
                                }
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged
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
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged
                              </Typography>
                            </CardContent>
                          </Collapse>

                          {/* <CardActions className={classes.buttonend}>
                            <Button
                              checked={value.checked}
                              onClick={() => this.handleChange(value.id)}
                              className={classes.button}
                            >
                              {value.checked ? "View less" : " View more"}
                            </Button>
                          </CardActions> */}
                        </Card>
                      </Grid>
                    );
                  })}
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
