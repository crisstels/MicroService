import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './Home.css';


const Home = (props) => {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        console.log('city: ', city);
        axios.get(`http://localhost:3001/${city}`).then((response) => {
            setData(response.data);
            //console.log('data:', data[0].main);
        })
    }
    console.log(Object.keys(data).length)
    console.log(data.weather)
    return(
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <TextField id="outlined-basic" label="Enter city" variant="outlined" value={city} onInput={e => setCity(e.target.value)}/>
                    <Button type="submit" className="button" label="submit" variant="outlined">Submit</Button>
                </div>
            </form>
            <div className="card-container">
            {Object.keys(data).length > 0  ? ( 
            <Card sx={{maxWidth: 500}}>
                <CardMedia component="img"
                           height="140"
                           image={`images/${data.weather[0].main}.png`}
                           alt="weather symbol"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Today's weather for {city}:</Typography>
                    <Typography variant="body2" color="GrayText">{data.weather[0].main}</Typography>
                    <Typography variant="body2" color="GrayText">description: {data.weather[0].description}</Typography>
                    <Typography variant="body2" color="GrayText">temperature: {data.main.temp}</Typography>
                </CardContent>
            </Card>
            )
             : 
             (<Card sx={{maxWidth: 500}}>
                 <CardContent>
                     <Typography variant="body2" color="GrayText">No data available now. Enter a city in the above field.</Typography>
                 </CardContent>
             </Card>)}
             </div>
        </div>
    </div>
)};
    

export default Home;