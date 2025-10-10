
const whetherData = {

}

/**
temperature_2m
: 
(168) [14, 13.9, 13.7, 13.2, 13.2, 13.3, 14.3, 16.1, 16.9, 18, 18.2, 18.4, 18.5, 18.3, 18, 17.8, 17.1, 16.7, 16.4, 16.2, 16.2, 16.1, 16, 15.9, 15.9, 16, 16, 15.8, 15.7, 15.7, 16.1, 16, 15.9, 15.5, 15.3, 15.3, 15.2, 13.2, 12.8, 13.2, 12.9, 12.7, 12.5, 12.2, 11.8, 11.4, 11.3, 11, 11, 11.1, 11.1, 10.8, 10.5, 10.5, 11.7, 13.8, 14.9, 15.6, 16.1, 16.4, 16.5, 16.3, 15.9, 15.7, 15.4, 14.9, 14.6, 14.4, 14.4, 14.2, 14, 13.8, 13.6, 13.3, 13.2, 13.1, 13, 13.5, 14.5, 16.2, 17, 17.5, 17.8, 17.9, 18, 18, 17.7, 17.2, 16.6, 15.8, 15.3, 14.9, 14.5, 14.3, 14.1, 14, 13.9, 13.7, 13.6, 13.6, …]
time
: */
export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&models=icon_seamless&current=temperature_2m,apparent_temperature,wind_speed_10m,precipitation`);
        const data = await res.json();
        console.log(data); 
        whetherData.CurrentWhether = {
            apparentTempreture: data.current.apparent_temperature,
            precipitation: data.current.precipitation,
            windSpeed: data.current.wind_speed_10m,
            FeelsLike: data.current.temperature_2m,
        }
        whetherData.HourlyWeather = {
            tempreture: data.hourly.temperature_2m.slice(0,9),
            time: data.hourly.time.slice(0,8),
        }
        console.log(whetherData);
        
    }catch(err){
        console.log(err);
    }
}