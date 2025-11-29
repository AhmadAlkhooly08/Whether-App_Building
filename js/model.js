export const whetherData = {
    geoLocation:{},
    SearchedData:{},
    SwitchDays:{},
    SearchResaults:[],
}

let curData= null;
let copy = null;

export const getCurrentObj = function(text){
    curData = null;
    for(const key in whetherData){
        const data = whetherData[key];
        if(!data.CurrentWhether) continue;
        if(data.CurrentWhether.location === text || data.name === text){
           curData = data;
           copy = structuredClone(data);
           break;
        }
    }
    return curData;
}

export const curUnits ={
    temp: 'C',
    speed:'km/h',
    prep: 'mm',
    // copy: structuredClone(curData),
}


const convertTempruter = function(unit){

    const curCopy = structuredClone(curData);
    if(unit === 'F'){
        copy.CurrentWhether.Tempreture = Math.trunc((curCopy.CurrentWhether.Tempreture * 9/5) + 32);
        copy.CurrentWhether.apparentTempreture = Math.trunc((curCopy.CurrentWhether.apparentTempreture * 9/5) + 32);
        copy.DailyWhether.maxTempreture = curCopy.DailyWhether.maxTempreture.map(e => Math.trunc((e * 9/5) + 32));
        copy.DailyWhether.minTempreture = curCopy.DailyWhether.minTempreture.map(e => Math.trunc((e * 9/5) + 32));
        copy.HourlyWether.tempreture = curCopy.HourlyWether.tempreture.map(e => Math.trunc((e * 9/5) + 32));
        copy.unit = '°F';
    }else{
        copy.CurrentWhether.Tempreture = Math.round((copy.CurrentWhether.Tempreture -32) * 5/9);
        copy.CurrentWhether.apparentTempreture = Math.round((copy.CurrentWhether.apparentTempreture - 32) * 5/9);
        copy.DailyWhether.maxTempreture = copy.DailyWhether.maxTempreture.map(e => Math.round((e - 32) * 5/9));
        copy.DailyWhether.minTempreture = copy.DailyWhether.minTempreture.map(e => Math.round((e - 32) * 5/9));
        copy.HourlyWether.tempreture = copy.HourlyWether.tempreture.map(e => Math.round((e - 32) * 5/9));

        copy.unit = '°';
    }
    curUnits.temp = unit;
    return copy;
}
const convertSpeed = function(unit){
    const curCopy = structuredClone(curData);
    if(unit === 'mph'){
        copy.CurrentWhether.windSpeed = Math.trunc(curCopy.CurrentWhether.windSpeed * 0.621371);
        copy.CurrentWhether.SpeedUnit = 'mph';
    }else{
        copy.CurrentWhether.windSpeed = Math.round(copy.CurrentWhether.windSpeed * 1.60934 + 0.6);
        copy.CurrentWhether.SpeedUnit = 'km/h';
    }

    curUnits.speed = unit;
    return copy;
}

const convertprep = function(unit){
    const curCopy = structuredClone(curData);

    if(unit === 'in'){
        copy.CurrentWhether.precipitation = +(curCopy.CurrentWhether.precipitation / 25.4).toFixed(1);
        copy.CurrentWhether.sembol = 'in';      
    }else{
        copy.CurrentWhether.precipitation = +(copy.CurrentWhether.precipitation * 25.4).toFixed(1);
        // copy = structuredClone(curCopy);
        copy.CurrentWhether.sembol = 'mm';  

    }
    curUnits.prep = unit;
    // copy2 = structuredClone(copy);
    return copy;
}


//! Editing API data 
const add_Current_Whether = function(data){
    return {
        apparentTempreture: Math.trunc(data.current?.apparent_temperature),
        precipitation: data.current.precipitation,
        windSpeed: Math.trunc(data.current.wind_speed_10m),
        Tempreture: Math.trunc(data.current.temperature_2m),
        humidity: Math.trunc(data.current.relative_humidity_2m),
        location: data.timezone.split('/').pop(),
        SpeedUnit : 'km/h',
        sembol: 'mm',
        weathercode: data.current.weathercode,
    }    

}
const add_Daily_Whether = function(data){
    return {
        maxTempreture: data.daily.temperature_2m_max.map(el=> Math.trunc(el)),
        minTempreture: data.daily.temperature_2m_min.map(el=> Math.trunc(el)),
        date: data.daily.time,
        weathercode: data.daily.weathercode,
    }    

}
const add_Hourly_whether = function(data,switchDate = undefined,h=undefined){
    let now = switchDate ? new Date(switchDate) : new Date();
    const month = String(h ? h?.getMonth() +1 : now.getMonth() +1).padStart(2,'0');
    const date = String(h ? h?.getDate() : now.getDate()).padStart(2,'0');
    const hour = String(h ? h?.getHours() : now.getHours()).padStart(2,'0');

    const find = `${h ? h?.getFullYear() : now.getFullYear()}-${month}-${date}T${hour}:00`;
    const setData = data.hourly.time.findIndex(el => el == find);
    const newData = data.hourly.time.slice(setData + 1,setData + 9);
    // console.log(data.daily.time);
    console.log(find,newData);
    return {
        tempreture: data.hourly.temperature_2m.slice(0,9).map(el=> Math.trunc(el)),
        time: newData.map(el=> el.slice(11,el.length -3)).map(el =>{
            if(el > 12) return el - 12
            if(el == '00') return 12
            else return el
        }),
        meridiem: newData.map(el=> el.slice(11,el.length -3)).map(el=>{
            if(el >= 12) return 'PM'
            if(el < 12 && el >= 0) return 'AM'
        }),
        weathercode: data.hourly.weathercode.slice(0,9),
    }    

}

const add_date_country = function(timezone,curDate = undefined){
    const date = curDate ? new Date(curDate) : new Date();
    const all_date = {
        weekday: 'long',
        month:'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
    }
    return date.toLocaleDateString('en-Us',all_date)
}


//! Creating API Requests
export const geoLocation = async function(lat,long){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,weathercode&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weathercode&timezone=auto`);
        const data = await res.json();
        console.log(data);
        const fullDays = data.daily.time.slice().map(el=>{
            const date = new Date(el);

            return date.toLocaleDateString('en-Us',{'weekday':'long'});
        })
        const shortDays = data.daily.time.slice().map(el=>{
            const date = new Date(el);

            return date.toLocaleDateString('en-Us',{'weekday':'short'});
        })
        whetherData.geoLocation.fullDay = fullDays;
        whetherData.geoLocation.shortDays = shortDays;
        whetherData.geoLocation.dates = data.daily.time;

        whetherData.geoLocation.CurrentWhether = add_Current_Whether(data)
        whetherData.geoLocation.DailyWhether =  add_Daily_Whether(data)
        whetherData.geoLocation.HourlyWether = add_Hourly_whether(data)
        whetherData.geoLocation.date = add_date_country(data.timezone);
        whetherData.geoLocation.unit = '°';
        whetherData.geoLocation.lat = data.latitude;
        whetherData.geoLocation.long = data.longitude;
        whetherData.geoLocation.activeDay =  fullDays[0]; 
        whetherData.geoLocation.timeZone = data.timezone;
        console.log(whetherData);
        console.log(curData);

    }catch(err){
        console.log(err);
    }
}

export const Searching = async function(Search,clickedValue = undefined){
    try{
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${clickedValue === undefined ? Search : clickedValue}`)
        const data = await res.json();
        const {results} = data;
        if(!results) return

        const SearchedCountry ={
            name: `${results[0]?.name}, ${results[0].country ? results[0].country : ''}`,
            latitude: results[0]?.latitude,
            longitude: results[0]?.longitude,
            timeZone: results.find(e => e.timezone).timezone,
        }

        const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${SearchedCountry.latitude}&longitude=${SearchedCountry.longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,weathercode&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weathercode&timezone=${SearchedCountry.timeZone}`);
        const resault = await res2.json();
        console.log(resault);
        const d =new Date(new Date().toLocaleString('en-Us',{'timeZone': resault.timezone}));

        const fullDays = resault.daily.time.slice().map(el=>{
            const date = new Date(el + 'T00:00:00Z');
            return date.toLocaleDateString('en-Us',{'weekday':'long',timeZone:resault.timezone});
        })
        const shortDays = resault.daily.time.slice().map(el=>{
            const date = new Date(el + 'T00:00:00Z');
            return date.toLocaleDateString('en-Us',{'weekday':'short',timeZone:resault.timezone});
        })
        whetherData.SearchedData.fullDay = fullDays;
        whetherData.SearchedData.shortDays = shortDays;

        whetherData.SearchedData.dates = resault.daily.time;

        whetherData.SearchedData.CurrentWhether = add_Current_Whether(resault)
        whetherData.SearchedData.DailyWhether =  add_Daily_Whether(resault)
        whetherData.SearchedData.HourlyWether = add_Hourly_whether(resault,undefined,d);
        whetherData.SearchedData.date = add_date_country(SearchedCountry.timeZone);
        whetherData.SearchedData.unit = '°';
        whetherData.SearchedData.lat = resault.latitude;
        whetherData.SearchedData.long = resault.longitude;
        whetherData.SearchedData.name =  SearchedCountry.name ; 
        whetherData.SearchedData.activeDay =  fullDays[0]; 
        whetherData.SearchedData.timeZone = resault.timezone;
        console.log(whetherData);

    }catch(err){
        console.log(err);
    }
}
export const SearchResault = async function(e){
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${e}`)
    const data = await res.json();
    const solution = data.results?.slice(0,4).map(el=> el?.name);
    const countrys = [...new Set(solution)];
    whetherData.SearchResaults = countrys;
}
//! Switching data by Dom 
export const switchData = function(clickedBtn,activeBtn){
    if(!curData || !curData.CurrentWhether) return;

    if(clickedBtn === 'fahrenheit(°F)') {
        return convertTempruter('F');
    }
    if(clickedBtn === 'Celsius(°C)' ) {
        return convertTempruter('C');
    }
    if(clickedBtn === 'mph' ) {
        return convertSpeed('mph');
    }
    if(clickedBtn === 'Km/h' ) {
        return convertSpeed('km/h');
    }
    if(clickedBtn === 'Inches(in)') {
        return convertprep('in');
    }
    if(clickedBtn === 'Millimeters(mm)') {
        return convertprep('mm');
    }
    if(clickedBtn === 'Switch to Imperial'){
        let base = structuredClone(curData);

        base = convertTempruter('F');
        base = convertSpeed('mph');
        base = convertprep('in');
        return base;
    }

    return curData;
}
export const switchDays = async function(day){
    try{
        const date = curData.fullDay.findIndex((el)=> el === day);
        const newDate= curData.dates[date];

        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${curData.lat}&longitude=${curData.long}&hourly=temperature_2m,wind_speed_10m,precipitation,weathercode&start_date=${newDate}&end_date=${newDate}&timezone=${curData.timeZone}`);
        const data = await res.json();

        
        console.log(curData);

        if(day == curData.fullDay[0]) return whetherData.SwitchDays = curData;
        whetherData.SwitchDays = structuredClone(curData);
        whetherData.SwitchDays.HourlyWether = add_Hourly_whether(data,newDate);
        whetherData.SwitchDays.date = add_date_country(data.timezone,newDate);
        whetherData.SwitchDays.activeDay = day;
        console.log(whetherData.SwitchDays);

    }catch(err){
        console.log(err);
    }
    
}
