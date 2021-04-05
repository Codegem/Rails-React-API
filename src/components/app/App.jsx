import React, {useState, useEffect} from 'react';
import TableCars from '../table/TableCars';
import Favorites from '../favorites/Favorites';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function App() {

    const API = 'http://localhost:3000';
    const [data, setdata] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        await(fetch(API)
          .then(res => res.json())
          .then(
            (result) => {
              setdata(result);
            },
            (error) => {
              console.log(error);
            }
          )
        )}
      fetchData();
    }, []);

    if( data.length === 0){
      return (
        <Box padding="15rem" display="flex" justifyContent="center">
          <CircularProgress size={200}/>
        </Box>
      )
    }else{
    return (
      <Box padding="0.5rem" display="flex">
        <Box padding="0.5rem">
            <TableCars data={data} API={API}/>
        </Box>
            <Favorites data={data}/>
      </Box> 
    )
    }
}
