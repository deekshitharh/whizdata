import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  container: {
    maxWidth: 100,

    flexGrow: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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

class BaseDialog extends Component {
  render()
  {
   
    const { classes, open, onClose } = this.props;

    
    return (
      <Dialog
        open={open}
        onClose={onClose}
         aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll='body'
      >
        <DialogTitle  children="" id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"/>
            <div className={classes.container}>
              {this.props.children}
            </div>
        
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(BaseDialog);