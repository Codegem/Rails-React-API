import React, {useState, useEffect} from 'react';
import TableCars from '../table/TableCars';
import Favorites from '../favorites/Favorites';

export default function App() {

    const API = 'http://localhost:3000/';
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch(API)
          .then(res => res.json())
          .then(
            (result) => {
              setdata(result);
            },
            (error) => {
              console.log(error);
            }
          )
    }, []);

    return ( 
        <div>
            <TableCars data={data} API={API}/>
            <Favorites />
        </div>
    )
}
