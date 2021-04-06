import React from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import {Button} from '@material-ui/core';


function RemoveFavoritesButton() {
    return (
         <Button>
            <StarsIcon color="disabled"/>
        </Button>
    )
}

export default RemoveFavoritesButton
