import * as model from './model.js'
import GeoView from './view/GeoView.js'
import loadingView from './view/loadingView.js';
import SearchView from './view/SearchView.js';
import dropDownBarView from './view/dropDownBarView.js';
const ControlLocation = async function(){
    loadingView.render();
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async function(position){
        try{
            const { latitude, longitude } = position.coords;
            await model.geoLocation(latitude,longitude)
            GeoView.render(model.whetherData.geoLocation)
            model.getCurrentObj(document.querySelector('.location h2').textContent);

        }catch(err){
            console.log(err);
            SearchView.renderError()
        }
    })
}

const controlSearch = async function(value){
    try{
        loadingView.render();

        await model.Searching(value)
        GeoView.render(model.whetherData.SearchedData);
        model.getCurrentObj(document.querySelector('.location h2').textContent);

    }catch(err){
        SearchView.renderError()
        console.log(err);
    }
}

const controlSwitch = async function(clickedBtn,activeBtn){
    try{
        const convertedData = model.switchData(clickedBtn,activeBtn);

        GeoView.render(convertedData)
    }catch(err){
        console.log(err);
    }
}
const input = function(){
    ControlLocation();
    SearchView.handler(controlSearch);
    dropDownBarView.unitsClick(controlSwitch)
}
input();