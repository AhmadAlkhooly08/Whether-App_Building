
export const whetherData = {}

export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=auto`);
        const data = await res.json();
        console.log(data); 
        data.daily.time = data.daily.time.map(el=>{
            const date = new Date(el)
            return date.toLocaleDateString('en-US',{weekday:'short'})
        })
        whetherData.CurrentWhether = {
            apparentTempreture: Math.trunc(data.current.apparent_temperature),
            precipitation: data.current.precipitation,
            windSpeed: Math.trunc(data.current.wind_speed_10m),
            Tempreture: Math.trunc(data.current.temperature_2m),
            humidity: Math.trunc(data.current.relative_humidity_2m),
            location: data.timezone,
        }
        whetherData.DailyWheather ={
            maxTempreture: data.daily.temperature_2m_max.map(el=> Math.trunc(el)),
            minTempreture: data.daily.temperature_2m_min.map(el=> Math.trunc(el)),
            date: data.daily.time,
        }
        whetherData.HourlyWeather = {
            tempreture: data.hourly.temperature_2m.slice(0,8).map(el=> Math.trunc(el)),
            time: data.hourly.time.slice(0,8),
        }
        console.log(whetherData);
        
    }catch(err){
        console.log(err);
    }
}