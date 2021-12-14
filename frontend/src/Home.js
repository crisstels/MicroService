import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './images/Clouds.jpg';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        console.log('city: ', city);
        axios.get(`http://localhost:3001/weather/${city}`).then((response) => {
            setData(response.data);
            console.log('data:', data);
        })
    }
    return(
    <div className="outerTextField">
        <div className="textField">
            <p>Enter city: </p>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="city" variant="outlined" value={city} onInput={e => setCity(e.target.value)}/>
                <Button type="submit" className="button" label="submit" variant="outlined">Submit</Button>
            </form>
            {data.length > 0 ? (
            // 
            <Card sx={{maxWidth: 345}}>
                <CardMedia component="img"
                           height="140"
                           image={image}
                           alt="weather symbol"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Today's weather for {city}:</Typography>
                    <Typography variant="body2" color="GrayText">{data[0].main}</Typography>
                    <Typography variant="body2" color="GrayText">Temperatur: {data[0].description}</Typography>
                </CardContent>
            </Card>)
             : 
             (<p>Goodbye</p>)}
        </div>
    </div>
)};
    

export default Home;