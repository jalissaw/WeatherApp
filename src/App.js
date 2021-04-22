import './App.css';
import Navbar from './components/Navbar';
import {useState} from 'react';
import CurrentWeather from './components/CurrentWeather';
import HistoricalWeather from './components/HistoricalWeather'


function App() {

  const [zipCode, setZipCode] = useState('');
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null)
  let today = new Date().toISOString().slice(0, 10);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.weatherstack.com/historical?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${zipCode}&units=f&historical_date_start=2021-04-18&historical_date_end=${today}&hourly=1`, {
      method: "GET",
      headers: {
        'Accept': 'application/json'
    }
    })
    .then(res => {
      const lengthOfZipCode = String(zipCode).split('').length;
      if(lengthOfZipCode > 5 || lengthOfZipCode < 5) {
        throw Error('That is not a valid Zip Code, please try again');
      } else return res.json();
    }).then(res => {
      setData(res);
      setErr(null);
    }).catch(err => {
      setErr(err.message);
    });
    
  }

  const handleChange = (e) => {
    setZipCode(+e.target.value);
  }
  
  
  
  return (
    <div className="App">
     <Navbar 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
      />
      {err && <h2 className="err-message">{err}</h2>}
      {data && <CurrentWeather data={data}/>}
      {data && <HistoricalWeather data={data}/>}
    
    
    </div>
  );
}

export default App;
