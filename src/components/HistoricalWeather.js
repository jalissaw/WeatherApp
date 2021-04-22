import React from 'react'

const HistoricalWeather = ({data}) => {
    
    let dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      
    
    
    return (
        <section className="historical-weather-container sized">
            <div className="historical-weather">
                { 
                    Object.keys(data.historical).map((item, i) => (
                        
                    <div className="temp-container" key={i}>
                        <h2 className="temp-date">{ dayNames[new Date(data.historical[item].date).getDay()] }</h2>
                        <h3 className="temp-label">{ data.historical[item].avgtemp }<span><sup>o</sup>F</span></h3>
                        <h4 className="sunrise">Sunrise: { data.historical[item].astro.sunrise }</h4>
                        <h4 className="sunset">Sunset: { data.historical[item].astro.sunset }</h4>
                    </div>
                    
                    ))
                }
            </div>
        </section>
    )
}

export default HistoricalWeather
