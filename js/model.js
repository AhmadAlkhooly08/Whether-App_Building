
export const whetherData = {
    geoLocation:{},
    SearchedData:{}
}

const add_Current = function(data){
    return {
        apparentTempreture: Math.trunc(data.current.apparent_temperature),
        precipitation: data.current.precipitation,
        windSpeed: Math.trunc(data.current.wind_speed_10m),
        Tempreture: Math.trunc(data.current.temperature_2m),
        humidity: Math.trunc(data.current.relative_humidity_2m),
        location: data.timezone,
    }    

}
const add_Daily = function(data){
    return {
        maxTempreture: data.daily.temperature_2m_max.map(el=> Math.trunc(el)),
        minTempreture: data.daily.temperature_2m_min.map(el=> Math.trunc(el)),
        date: data.daily.time,
    }    

}
const add_Hourly = function(data){
    return {
        tempreture: data.hourly.temperature_2m.slice(1,9).map(el=> Math.trunc(el)),
        time: data.hourly.time.slice(1,9).map(el=> el.slice(11,el.length -3)).map(el =>{
            if(el > 12) return el - 12
            if(el == '00') return 12
            else return el
        }),
        meridiem: data.hourly.time.slice(1,9).map(el=> el.slice(11,el.length -3)).map(el=>{
            if(el >= 12) return 'PM'
            if(el < 12 && el >= 0) return 'AM'
        })
    }    

}
export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=auto&forecast_hours=12`);
        const data = await res.json();

        data.daily.time = data.daily.time.map(el=>{
            const date = new Date(el)
            return date.toLocaleDateString('en-US',{weekday:'short'})
        })
        whetherData.geoLocation.CurrentWhether = add_Current(data)
        whetherData.geoLocation.DailyWheather =  add_Daily(data)
        whetherData.geoLocation.HourlyWeather = add_Hourly(data)

    }catch(err){
        console.log(err);
    }
}

const Searching = async function(Search){
    try{
        const res = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=tokyo')
        const data = await res.json();
        const {results} = data;
        const SearchedCountry ={
            name: `${results[0].name}, ${results[0].country}`,
            latitude: results[0].latitude,
            longitude: results[0].longitude,
            timezone: results[0].timezone,
        }

        const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${SearchedCountry.latitude}&longitude=${SearchedCountry.longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=${SearchedCountry.timezone}&forecast_hours=12`);
        const data2 = await res2.json();

        whetherData.SearchedData.CurrentWhether = add_Current(data2)
        whetherData.SearchedData.DailyWheather =  add_Daily(data2)
        whetherData.SearchedData.HourlyWeather = add_Hourly(data2)

        whetherData.SearchedData.name =  SearchedCountry.name ; 
        console.log(whetherData);

    }catch(err){
        console.log(err);
    }
}
Searching()