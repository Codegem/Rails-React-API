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
import Box from '@material-ui/core/Box';

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
    const [favorited] = useState(false);
    const [ids, setids] = useState()

    console.log(ids)

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
                        <TableRow key={index}>
                        <TableCell align="center">{item.country}</TableCell>
                        <TableCell align="center">{item.commonname}</TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                            <FavoritesButton 
                                    id={item.id} 
                                    favorited={favorited} 
                                    // handleid={favorites=>setids([...ids, favorites ])} 
                                    handleid={ids => setids(ids)}
                                    data={props.data}
                            />
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
                padding="2rem"
            >
                <Pagination 
                    size="large" 
                    count={count} 
                    page={currentPage} 
                    onChange={handleChange}
                />
            </Box>
        </TableContainer>
    )
}