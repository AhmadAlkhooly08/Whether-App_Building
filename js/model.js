
export const whetherData = {
    geoLocation:{},
    SearchedData:{}
}
const add_Current_Whether = function(data){
    return {
        apparentTempreture: Math.trunc(data.current?.apparent_temperature),
        precipitation: data.current.precipitation,
        windSpeed: Math.trunc(data.current.wind_speed_10m),
        Tempreture: Math.trunc(data.current.temperature_2m),
        humidity: Math.trunc(data.current.relative_humidity_2m),
        location: data.timezone.split('/').pop(),
    }    

}
const add_Daily_Whether = function(data){
    return {
        maxTempreture: data.daily.temperature_2m_max.map(el=> Math.trunc(el)),
        minTempreture: data.daily.temperature_2m_min.map(el=> Math.trunc(el)),
        date: data.daily.time,
    }    

}
const add_Hourly_whether = function(data){
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

const add_date_country = function(timezone){
    const date = new Date();
    const all_date = {
        weekday: 'long',
        month:'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
    }
    return date.toLocaleDateString('en-Us',all_date)
}

const editDates = function(data){
    const tz = data.timezone;
    const ftr = new Intl.DateTimeFormat('en-Us',{'weekday':'short',timeZone:tz})
    data.daily.time = data.daily.time.map(el=>{
        const date = new Date(el + 'T00:00:00')
        return ftr.format(date)
    })

}
export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=auto`);
        const data = await res.json();
        console.log(data);
        editDates(data)
        whetherData.geoLocation.CurrentWhether = add_Current_Whether(data)
        whetherData.geoLocation.DailyWhether =  add_Daily_Whether(data)
        whetherData.geoLocation.HourlyWether = add_Hourly_whether(data)
        whetherData.geoLocation.date = add_date_country(data.timezone)
        console.log(whetherData);
    }catch(err){
        console.log(err);
    }
}

export const Searching = async function(Search){
    try{
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${Search}`)
        const data = await res.json();

        const {results} = data;
        if(!results) return

        const SearchedCountry ={
            name: `${results[0]?.name}, ${results[0].country ? results[0].country : ''}`,
            latitude: results[0]?.latitude,
            longitude: results[0]?.longitude,
            timeZone: results.find(e => e.timezone).timezone,
        }

        const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${SearchedCountry.latitude}&longitude=${SearchedCountry.longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&timezone=${SearchedCountry.timeZone}`);
        const resault = await res2.json();

        editDates(resault)
        whetherData.SearchedData.CurrentWhether = add_Current_Whether(resault)
        whetherData.SearchedData.DailyWhether =  add_Daily_Whether(resault)
        whetherData.SearchedData.HourlyWether = add_Hourly_whether(resault)
        whetherData.SearchedData.date = add_date_country(SearchedCountry.timeZone)

        whetherData.SearchedData.name =  SearchedCountry.name ; 

        const date3 = new Date().toLocaleDateString('en-Us',{timeZone:SearchedCountry.timeZone})
        console.log(date3);
        console.log(whetherData);
    }catch(err){
        console.log(err);
    }
}
Searching()
