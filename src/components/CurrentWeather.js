import React from 'react'

const CurrentWeather = ({ data }) => {
   
    
    return (
        <section className="weather bg-sized">
            
           <h1 className="city-name">{data.location.name}, {data.location.region}, {data.location.country}</h1>
           <img className="weather-icon" src={data.current.weather_icons} alt="Weather Icon"/>
           <h2 className="temp-f"><span>{data.current.temperature}<sup>o</sup>F</span></h2>
           <h3 className="description">{data.current.weather_descriptions}</h3>
           <h4>Feels Like: {data.current.feelslike}<span><sup>o</sup>F</span></h4>
           <h4>Humidity: {data.current.humidity}<span><sup>o</sup>F</span></h4>
         
        
        </section>
    )
}

export default CurrentWeather
