import React, {useState} from 'react'
// Material components 
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Grid, Typography, Paper} from '@material-ui/core'
import FavoriteEdit from '../favoritesEdit/FavouriteEdit';

export default function Favorites(props) {
    const data = props.data
    const EditBtn = props.EditBtn
    const Remove = props.RemoveFavoritesButton;

    // Favorites edit Dialog
    const [dialogOpen, setdialogOpen] = useState(false)

    const [fav, setfav] = useState()

    const editFavorite = (car) => {
        const newFavouriteName = data.filter(
          (data) => data.id === data.id
        );
        setfav(newFavouriteName)
    }

    const call = (car) => {
        editFavorite(car)
    }
  
  
    return (
        <Box display="flex" flexDirection="flex-end" >
            <Paper elevation={3}>
                <Grid item sm={12}>
                <Grid item sm={12}>
                    <Typography align="center" variant="h2">Favorites</Typography>
                </Grid>
                <List>
                    { data.map((car, index) => {
                    return (
                        <ListItem key={index} >
                            <Grid item sm={8}>
                            <ListItemText key={index} primary={car.name} />
                            </Grid>
                            <Grid item sm={2}>
                            <ListItemText key={index} primary={<Remove />} onClick={() => props.removeFavouritehandle(car)}/>
                            </Grid>
                            <Grid item sm={2}>                            
                            <ListItemText key={index} primary={<EditBtn/>} onClick={() => {setdialogOpen(true); editFavorite(car)}}/>
                            </Grid>
                        </ListItem>  
                        );                
                    })}
                </List>
                </Grid>
            </Paper>
            <FavoriteEdit 
              dialogOpen={dialogOpen} 
              handleClose={dialogOpen => setdialogOpen(dialogOpen)}
              favouriteEditHandle={call}
            />
        </Box>
    )
}
