import React, {useState} from 'react'

//material UI
import {Dialog, DialogContent, Button, InputLabel, TextField, Box, Container} from '@material-ui/core'

export default function FavouriteEdit(props) {
    let data = JSON.parse(localStorage.getItem('react-movie-app-favorites'));
    
    const [text, settext] = useState('')

    const nameHandler = (e) => {
        const textname = e.target.value
        settext(textname)
    }

    return (
        <Dialog
            open={props.dialogOpen}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
         <Container
                maxWidth="md"
                style={{ display: 'flex', 
                flexDirection: 'column', 
                justifyItems: 'right', 
                padding: '3rem' }}
        >
        {data.map((value, index) => {
            if(value.id === props.id)
                return (
                    <DialogContent key={index}>
                        <InputLabel style={{textAlign: "center"}} htmlFor="input-with-icon-adornment">Car Name</InputLabel>
                            <TextField 
                                key={index} 
                                id="standard-basic" 
                                defaultValue={value.name} onChange={nameHandler}
                                style={{width: "15rem", margin: "2rem"}}
                            />
                            <Box display="flex" flexDirection="row" justifyContent="center">
                            <Button onClick={() => props.handleClose(false) } color="primary">
                                Save
                            </Button>
                            <Button onClick={() => props.handleClose(false)} color="primary">
                                Close
                            </Button>
                            </Box>
                    </DialogContent>
                )
            return null;
        })}  
        </Container>  
        </Dialog>
    )
}
