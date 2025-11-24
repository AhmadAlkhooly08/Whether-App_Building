import * as model from './model.js'
import GeoView from './view/GeoView.js'
import loadingView from './view/loadingView.js';
import SearchView from './view/SearchView.js';
import dropDownBarView from './view/dropDownBarView.js';
import daysDropDown from './view/daysDropDownView.js'
const ControlLocation = async function(){
    dropDownBarView.disableBtn();
    loadingView.render();
    model.whetherData.SwitchDays = '';

    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async function(position){
        try{
            dropDownBarView.renderActive();
            const { latitude, longitude } = position.coords;
            await model.geoLocation(latitude,longitude)
            GeoView.render(model.whetherData.geoLocation)
            model.getCurrentObj(document.querySelector('.location h2').textContent);
            dropDownBarView.enableBtn();
        }catch(err){
            GeoView.renderError()
            console.log(err);
        }
    })
}

const controlSearch = async function(value){
    try{
        dropDownBarView.disableBtn();
        dropDownBarView.renderActive();
        loadingView.render();
        model.whetherData.SwitchDays = '';
        await model.Searching(value)
        GeoView.render(model.whetherData.SearchedData);
        model.getCurrentObj(document.querySelector('.location h2').textContent);

        dropDownBarView.enableBtn();

    }catch(err){
        SearchView.renderError()
        console.log(err);
    }
}

const controlSearchResaults = async function(e){
    console.log(e);
    model.SearchResault(e);
}

const controlSwitch = async function(clickedBtn){
    try{
        dropDownBarView.disableBtn();
        const convertedData = model.switchData(clickedBtn);

        GeoView.render(convertedData);
        dropDownBarView.enableBtn();
    }catch(err){
        console.log(err);
    }
}

const controlDaySwitch = async function(day){
    daysDropDown.loading();
    await model.switchDays(day);
    console.log(day);
    GeoView.render(model.whetherData.SwitchDays)
}
const input = function(){
    ControlLocation();
    SearchView.handler(controlSearch);
    SearchView.keyUp(controlSearchResaults);
    dropDownBarView.unitsClick(controlSwitch);
    daysDropDown.toggleClass(controlDaySwitch);
}
input();