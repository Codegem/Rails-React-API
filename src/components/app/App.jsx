import React, {useState, useEffect} from 'react';

//Components
import TableCars from '../table/TableCars';
import Favorites from '../favorites/Favorites';
import FavoritesButton from '../favorites/FavoritesButton';
import RemoveFavoritesButton from '../favorites/RemoveFavoritesButton';
import EditBtn from './favoritesEdit/FavouriteEditBtn';

//Material
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function App() {

    const API = 'http://localhost:3000';
    const [data, setdata] = useState([])
    //Favourites

    const [favourites, setfavourites] = useState([])
  
    const saveToLocal = (items) => {
      localStorage.setItem('react-movie-app-favorites', JSON.stringify(items) )
    }

    const addFavourite = (car) => {
      const newfavouriteList = [...favourites, car];
      if(favourites.includes(car)){
        alert('added allready')
      }else{
        setfavourites(newfavouriteList);
        saveToLocal(newfavouriteList);
      }
    }

    const removeFavourite = (car) => {
      const newfavouriteList = favourites.filter(
        (favourite) => favourite.id !== car.id
      );

      setfavourites(newfavouriteList);
      saveToLocal(newfavouriteList);
    }

    useEffect(() => {
      const carFavs = JSON.parse(localStorage.getItem('react-movie-app-favorites'));
      setfavourites(carFavs);
    }, []);

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
      <Box padding="1rem" display="flex">
        <Box padding="0.5rem">
            <TableCars 
              data={data} 
              API={API} 
              favourite={FavoritesButton} 
              favoritesHandle={addFavourite}
            />
        </Box>
        <Box padding="0.5rem">
            <Favorites 
              data={favourites} 
              RemoveFavoritesButton={RemoveFavoritesButton} 
              removeFavouritehandle={removeFavourite}
              EditBtn={EditBtn}
            />
        </Box>
      </Box> 
    )
    }
}
