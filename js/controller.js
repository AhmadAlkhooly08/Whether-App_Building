import * as model from './model.js'
import GeoView from './view/GeoView.js'
import loadingView from './view/loadingView.js';
import SearchView from './view/SearchView.js';
const ControlLocation = async function(){
    loadingView.render();
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

const controlSearch = async function(){
    try{
        
    }catch(err){

    }
}
ControlLocation();