import * as model from './model.js'
import GeoView from './view/GeoView.js'


const ControlLocation = async function(){
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async function(position){
        try{
            const { latitude, longitude } = position.coords;
            await model.geoLocation(latitude,longitude)
            GeoView.render(model.whetherData)
            
        }catch(err){
            console.log(err);
        }
    })
}

ControlLocation();