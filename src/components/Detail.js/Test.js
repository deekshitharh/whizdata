<div className={classes.paper1}>
  <div className={classes.papercontent}>
    <Typography gutterBottom variant="body1" className={classes.textarea}>
      We offer custom-designed software solutions to your organization. Your
      current adoption of software in your business operation or the
      tech-savviness of your team does not matter, because we believe that the
      new system has to blend-in without obstructing your current processes and
      operations. Whizdata has expertise in complex software design with
      in-built analytics. Our solutions are made for various desktop, mobile, or
      tab views by default. We also have vast experience integrating sensors.
      Our application treats information security as a basic ingredient of your
      business. Our product architecture team works closely with you to define
      the required solution for your operations. Once the software development
      begins, our program management runs the project in close contact with you.
      The application engineering team will train you and enable you to use the
      system and reap all its full benefits. As the software is adopted, we
      continue its upkeep to deliver you the values the new system promised.
    </Typography>
  </div>
</div>;



render() {
    const { classes } = this.props;
    const { activeIndex } = this.state;
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
                  {/* <Paper className={classes.paper}> */}
                  {/* <div className={classes.box}> */}

                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    variant="body1"
                    className={classes.sectionheading}
                
                  >
                    <b> Approach To Work</b>
                  </Typography>

                  <Typography  gutterBottom>
                    We provide well-designed solutions that can breathe
                    automation & optimization into your work-flow.
                    <br />
                    Embrace best practice adoption as a foundational attribute.
                    Our experience in design automation, test automation and
                    model engineering brings in some of the best systems into
                    practice at Whizdata. Our technical leaders have multiple
                    patents in design engineering automation. Most of our API
                    framework, test infrastructure, unit and API level tests
                    etc. are auto-generated out of our own home-grown design
                    tools. This not only cuts the design and test cost / time,
                    but also guarantees uniformity in coding and reduces human
                    induced errors.
                    <br />
                    If we need a change in the design, most likely all we have
                    to change is our own specification files. The rest of the
                    design-flow adheres to the new requirement automatically!
                    This reduces turn-around time for bug closures and helps us
                    to manage ECOs more efficiently. Test, learn and share with
                    other technical and business experts We have experience
                    working at the extreme ends of tech-savvy users. On one
                    side, we have enabled high-tech engineering teams to
                    automate their design flow, and the components of our
                    solution are parsers, code-generators, optimizers and report
                    generators.
                    <br />
                    On the other end of our customer profile are people who are
                    experts in a domain on their own, but are not expert users
                    of computer in any form factor. This background gives us a
                    wide array of skills spanning from UX design to API
                    engineering which makes the promised end-user experience
                    realizable.
                  </Typography>

                  <div className={classes.flex}>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={activeIndex}
                      onChange={this.handleChange}
                      className={classes.tabs}
                    >
                      <Tab label="Item One" />
                      <Tab label="Item Two" />
                      <Tab label="Item Three" />
                      <Tab label="Item Four" />
                      <Tab label="Item Five" />
                      <Tab label="Item Six" />
                      <Tab label="Item Seven" />
                    </Tabs>
                    {activeIndex === 0 && <Paper>Item One</Paper>}
                    {activeIndex === 1 && <Paper>Item One</Paper>}
                    {activeIndex === 2 && <Paper>Item One</Paper>}
                  </div>

                  {/* </Paper> */}
                  {/* <Paper elevation={10} className={classes.paper}>
                    <Typography
                      color="secondary"
                      gutterBottom
                      variant="body1"
                      className={classes.heading}
                    >
                      <b> Designed with commonality in mind:</b>
                    </Typography>
                    <Typography
                      className={classes.innertext}
                      variant="body1"
                      gutterBottom
                    >
                      Our case-studies can give you more details and you can
                      easily spot the commonality in all our solutions. In each
                      case, the solutions are designed to bring down inefficient
                      communication across different cadres of people in the
                      operation chain. The solution will work like a rule-book
                      which does not allow you to flip to the next step until
                      the owner of this step complete all the required work to
                      mark this step as ’done’. You can fix timelines to each
                      step and if the work is not done, alerts pop-up on the
                      screens of all relevant people in the organization.
                    </Typography>
                  </Paper>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography
                      color="secondary"
                      gutterBottom
                      variant="body1"
                      className={classes.heading}
                    >
                      <b> Designed with commonality in mind:</b>
                    </Typography>
                    <Typography
                      className={classes.innertext}
                      variant="body1"
                      gutterBottom
                    >
                      Our case-studies can give you more details and you can
                      easily spot the commonality in all our solutions. In each
                      case, the solutions are designed to bring down inefficient
                      communication across different cadres of people in the
                      operation chain. The solution will work like a rule-book
                      which does not allow you to flip to the next step until
                      the owner of this step complete all the required work to
                      mark this step as ’done’. You can fix timelines to each
                      step and if the work is not done, alerts pop-up on the
                      screens of all relevant people in the organization.
                    </Typography>
                  </Paper>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography
                      className={classes.heading}
                      color="secondary"
                      gutterBottom
                      variant="body1"
                    >
                      <b> Designed with end results at the outset:</b>
                    </Typography>
                    <Typography
                      className={classes.innertext}
                      variant="body1"
                      gutterBottom
                    >
                      All of our custom-developed solution can be easily mapped
                      to the customers’ ledger-based or office-suite-based
                      system of working and hence adoption has not been too
                      complex for any of our users. The greatest value-add is
                      near-real-time availability of information organized as
                      tables/graphs/charts and a dashboard using which you can
                      view the data you feel is most relevant at that point.
                      With this data available quickly, and your knowledge of
                      your business, we are sure you can use our software to
                      assign work and improve the efficiency of your
                      organization each day.
                    </Typography>
                  </Paper>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography
                      color="secondary"
                      className={classes.heading}
                      gutterBottom
                      variant="body1"
                    >
                      <b> Responsible access to real-time information:</b>
                    </Typography>
                    <Typography
                      className={classes.innertext}
                      variant="body1"
                      gutterBottom
                    >
                      Information is stored in centralized, secure back-end, and
                      is securely fetched to provide the required views without
                      having the need to share documents or emails to get the
                      work going. Data and decisions are available irrespective
                      of where the stake-holders are. For example, a
                      subject-matter-expert in our sports solution is able to
                      resolve a fixture conflict while the event is held in
                      another place half-way round the globe! In all cases, we
                      have used computer systems to crunch the data quickly,
                      with no scope for human induced error hence avoiding
                      re-work efforts.
                    </Typography>
                  </Paper> */}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles("approachstyles"))(Aboutwork));





{cardArr.map(value => {
                      return (
                        <Grid
                          container
                          justify="center"
                          className={classes.layergrid}
                          item
                          key={value.id}
                          md={3}
                          spacing={1}
                        >
                          <Card
                            id={value.id}
                            className={classes.card + "  " + classes.gridbg}
                          >
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                component="img"
                                alt="Contemplative Reptile"
                                height="300"
                                image={value.img}
                              />
                            </CardActionArea>

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
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged
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
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged
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
})
}
                    










 {/* <Marker
                 onClick={this.onMarkerClick}
                 name={"Whizdata solutions"}
                 position={{ lat: 12.94074, lng: 77.570398 }}
               />
               <Marker
                 onClick={this.onMarkerClick}
                 name={"Dolores park"}
                 position={{ lat: 12.940171, lng: 77.574573 }}
               /> */}
               {//curly brace here lets you write javscript in JSX

            //    data.map(item => (
            //      <Marker
            //        onClick={this.onMarkerClick}
            //        key={item.id}
            //        title={item.name}
            //        name={item.name}
            //        position={{ lat: item.lat, lng: item.lng }}
            //      />
            //    ))}

            //    <InfoWindow
            //      marker={this.state.activeMarker}
            //      visible={this.state.showingInfoWindow}
            //      onClose={this.onClose}
            //    >
            //      <Typography variant="subtitle1" gutterBottom>
            //        {this.state.selectedPlace.name}
            //      </Typography>
            //    </InfoWindow>
           