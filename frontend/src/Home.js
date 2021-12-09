import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './Home.css';
import { useState } from 'react';

const Home = (props) => {
    const [city, setCity] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        console.log('city: ', city);
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