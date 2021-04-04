import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoritesButton from '../favorites/FavoritesButton';

// TableComponent

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function TableCars(props) {
    const classes = useStyles();
    const data = props.data;
    // Paginate 
    const [rowPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const last = currentPage * rowPerPage;
    const first = last - rowPerPage;
    const currentData = data.slice(first, last);
    const count = Math.ceil(data.length / rowPerPage);
    const handleChange = (event, value) => {
        setcurrentPage(value);
    };
    //Favorite

    const [favorites, setfavorites] = useState([]);
    const [favorited, setfavorited] = useState(false);


    // const handleFavorite = async (event) => {
    //     var data = new Event(event);
    //     await fetch(props.API, {
    //         method: "POST",
    //         mode: "cors",
    //         body: JSON.stringify({

    //         })
    //     })
    //     .then(response => response.json)
    //     .then(response => console.log(response))
    // }
    console.log(favorites)

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
            <TableHead >
            <TableRow>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Main Name</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Favorite</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {currentData.map((item, index) => {
                    return(
                        <TableRow key={item.index}>
                        <TableCell align="center" >{item.country}</TableCell>
                        <TableCell align="center" >{item.commonname}</TableCell>
                        <TableCell align="center" >{item.name}</TableCell>
                        <TableCell align="center" >
                            <FavoritesButton id={item.id} favorited={favorited} favoriteHandle={favorites => setfavorites(favorites)} key={item.index} />
                        </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
            <Pagination count={count} page={currentPage} onChange={handleChange}/>
        </TableContainer>
    )
}
