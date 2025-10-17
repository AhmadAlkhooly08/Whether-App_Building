
export const whetherData = {}

export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=auto`);
        const data = await res.json();
        console.log(data); 
        whetherData.CurrentWhether = {
            apparentTempreture: data.current.apparent_temperature,
            precipitation: data.current.precipitation,
            windSpeed: data.current.wind_speed_10m,
            Tempreture: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            location: data.timezone,
        }
        whetherData.DailyWheather ={
            maxTempreture: data.daily.temperature_2m_max,
            minTempreture: data.daily.temperature_2m_min,
            date: data.daily.time,
        }
        whetherData.HourlyWeather = {
            tempreture: data.hourly.temperature_2m.slice(0,8),
            time: data.hourly.time.slice(0,8),
        }
        console.log(whetherData);
        
    }catch(err){
        console.log(err);
    }
}