import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);
    const hasdata = this.state.hasdata;

    function handleSubmit(event){
        event.preventDefault();
        console.log('city: ', city);
        axios.get(`http://localhost:3001/weather/${city}`).then((response) => {
            setData(response.data);
            console.log('data:', data[0].main);
        })
    }
    return(
    <div className="outerTextField">
        <div className="textField">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="city" variant="outlined" value={city} onInput={e => setCity(e.target.value)}/>
                <Button type="submit" className="button" label="submit" variant="outlined">Submit</Button>
            </form>
        </div>
    </div>
)};
    

export default Home;