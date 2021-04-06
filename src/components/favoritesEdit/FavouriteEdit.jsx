import React, {useState} from 'react'

//material UI
import {Dialog, DialogContent, DialogContentText, Button} from '@material-ui/core'

export default function FavouriteEdit(props) {
    return (
        <Dialog
            open={props.dialogOpen}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

          </DialogContentText>
        </DialogContent>
        <Button onClick={() => props.handleClose(false)} color="primary">
            close
        </Button>
        </Dialog>
    )
}
