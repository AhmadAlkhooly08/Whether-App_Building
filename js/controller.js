import {geoLocation} from './model.js'



const ControlLocation = async function(){
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async function(position){
        try{
            const { latitude, longitude } = position.coords;
            // const lat = Number(latitude.toFixed(6))
            // const long = Number(longitude.toFixed(6))
            console.log(latitude,longitude);
            await geoLocation(latitude,longitude)
        }catch(err){
            console.log(err);
        }
    })
}

ControlLocation();