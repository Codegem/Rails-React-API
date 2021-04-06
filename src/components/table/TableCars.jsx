import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// TableComponent

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
      minWidth: 900,
    },
  });


export default function TableCars(props) {
    const classes = useStyles();

    //props

    const FavoritesButton = props.favourite;
    const data = props.data;

    // Paginate 

    const [rowPerPage] = useState(8);
    const [currentPage, setcurrentPage] = useState(1);
    const last = currentPage * rowPerPage;
    const first = last - rowPerPage;
    const currentData = data.slice(first, last);
    const count = Math.ceil(data.length / rowPerPage);
    const handleChange = (event, value) => {
        setcurrentPage(value);
    };    
    
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table}>
            <TableHead >
            <TableRow>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Main Name</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Favorite</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {currentData.map((car, index) => {
                    return(
                        <TableRow key={index}>
                        <TableCell align="center">{car.country}</TableCell>
                        <TableCell align="center">{car.commonname}</TableCell>
                        <TableCell align="center">{car.name}</TableCell>
                        <TableCell align="center" onClick={() => props.favoritesHandle(car)}>
                            <FavoritesButton />
                        </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
            <Box 
                justifyContent="center" 
                display="flex" 
                alignItems="center" 
                padding="0.5rem"
            >
                <Pagination 
                    size="medium" 
                    count={count} 
                    page={currentPage} 
                    onChange={handleChange}
                />
            </Box>
        </TableContainer>
    )
}