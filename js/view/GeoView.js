import iconSunny from '../../images/icon-sunny.png';
import iconRain from '../../images/icon-rain.webp';
import iconDrizzle from '../../images/icon-drizzle.webp';
import iconPartlyCloudy from '../../images/icon-partly-cloudy.webp';
import iconStorm from '../../images/icon-storm.webp';
import iconSnow from '../../images/icon-snow.webp';
import iconFog from '../../images/icon-fog.webp';
import iconOvercast from '../../images/icon-overcast.webp';
import iconDropdown from '../../images/icon-dropdown.svg';

console.log(iconRain);

class GeoView{
    _parentEl= document.querySelector('.main-section')
    _data;
    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this.clear();
        this._parentEl.insertAdjacentHTML("afterbegin",markup);
    }

    clear(){
        this._parentEl.innerHTML = '';
    }
    _generateMarkup(){
        return`
            <div class="first-section">
                <div class="bg-today">
                <div class="location">
                    <h2>Istanbul Turkey</h2>
                    <h4>Friday, oct 3 , 2025</h4>
                </div>

                <div class="temprature">
                    <img src="${iconSunny}" alt="">
                    <h1>${this._data.CurrentWhether.Tempreture}°</h1>
                </div>
                </div>
                <div class="prediction">
                    <div class="square Feels-Like">
                    <h4>Feels Like</h4>
                    <h1>${this._data.CurrentWhether.apparentTempreture}°</h1>
                    </div>
                    <div class="square Humidity">
                    <h4>Humidity</h4>
                    <h1>${this._data.CurrentWhether.humidity}%</h1>
                    </div>
                    <div class="square Wind">
                    <h4>Wind</h4>
                    <h1>${this._data.CurrentWhether.windSpeed} km/h</h1>
                    </div>
                    <div class="square precipitation">
                    <h4>precipitation</h4>
                    <h1>${this._data.CurrentWhether.precipitation} mm</h1>
                    </div>
                </div>

                <div class="daily-forecast">
                <h3>Daily forecast</h3>
                <div class="days-Whether">
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[0]}</h3>
                    <img src="${iconRain}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[1]}</h3>
                    <img src="${iconDrizzle}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[1]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[1]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[2]}</h3>
                    <img src="${iconSunny}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[2]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[2]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[3]}</h3>
                    <img src="${iconPartlyCloudy}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[3]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[3]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[4]}</h3>
                    <img src="${iconStorm}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[4]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[4]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[5]}</h3>
                    <img src="${iconSnow}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[5]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[5]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${this._data.DailyWheather.date[6]}</h3>
                    <img src="${iconFog}" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[6]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[6]}°</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="second-section">
                <div class="dropDown-Days">
                <div class="row">
                    <h1>Hourly forecast</h1>
                    <div class="btn-days">
                    <button>
                        <p>Friday</p>
                        <img src="${iconDropdown}" alt="" />
                    </button>
                    </div>
                </div>
                <div class="days-select hidden">
                    <button>Monday</button>
                    <button>Tuesday</button>
                    <button>Wednesday</button>
                    <button>Thursday</button>
                    <button class="active">Friday</button>
                    <button>saturday</button>
                    <button>sunday</button>
                </div>
                </div>
                <div class="whether-Hours">
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconPartlyCloudy}" alt="">
                    <p>3 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[0]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconOvercast}" alt="">
                    <p>4 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[1]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconSunny}" alt="">
                    <p>5 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[2]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconOvercast}" alt="">
                    <p>6 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[3]}°</h4>
                </div>

                <div class="slide">
                    <div class="img-section">
                    <img src="${iconRain}" alt="">
                    <p>7 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[4]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconStorm}" alt="">
                    <p>8 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[5]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconFog}" alt="">
                    <p>9 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[6]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="${iconOvercast}" alt="">
                    <p>10 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[7]}°</h4>
                </div>

                </div>
            </div>
        `
    }
}

export default new GeoView();