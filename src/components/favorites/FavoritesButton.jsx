import React from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import {Button} from '@material-ui/core';


function FavoritesButton() {
    return (
         <Button>
            <StarsIcon color="primary"/>
        </Button>
    )
}

export default FavoritesButton