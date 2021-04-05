import React from 'react'
// Material components 
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function Favorites(props) {
    const data = props.data
    
    return (
        <Box display="flex" flexDirection="flex-end">
            {data.map((value, index) => {
            if(value.favorites.length === 0)
            return null;
            else
                return (
                    <List key={index}>
                        { value.favorites.map((value, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemText key={index} primary={value.Car_id} />
                            </ListItem>  
                            );                
                        })}
                    </List>
                )
            })}
        </Box>
    )
}
