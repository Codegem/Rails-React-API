import React from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import {Button} from '@material-ui/core';


function FavoritesButton(props) {

    return (
        <div>
         <Button 
            onClick={() => {props.handleid(props.id)}}>
            <StarsIcon color={props.favorited ? "primary" : "action" } />
        </Button>
        </div>
    )
}

export default FavoritesButton
