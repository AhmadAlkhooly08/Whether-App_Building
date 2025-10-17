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
                    <img src="./assets/images/icon-sunny.webp" alt="">
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
                    <h3>Tue</h3>
                    <img src="./assets/images/icon-rain.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Wed</h3>
                    <img src="./assets/images/icon-drizzle.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[1]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Thu</h3>
                    <img src="./assets/images/icon-sunny.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Fri</h3>
                    <img src="./assets/images/icon-partly-cloudy.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Sat</h3>
                    <img src="./assets/images/icon-storm.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Sun</h3>
                    <img src="./assets/images/icon-snow.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>Mon</h3>
                    <img src="./assets/images/icon-fog.webp" alt="">
                    <div class="days-percentege">
                        <h4>${this._data.DailyWheather.maxTempreture[0]}°</h4>
                        <h4>${this._data.DailyWheather.minTempreture[0]}°</h4>
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
                        <img src="./assets/images/icon-dropdown.svg" alt="" />
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
                    <img src="./assets/images/icon-partly-cloudy.webp" alt="">
                    <p>3 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[0]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-overcast.webp" alt="">
                    <p>4 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[1]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-sunny.webp" alt="">
                    <p>5 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[2]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-overcast.webp" alt="">
                    <p>6 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[3]}°</h4>
                </div>

                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-rain.webp" alt="">
                    <p>7 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[4]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-storm.webp" alt="">
                    <p>8 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[5]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-fog.webp" alt="">
                    <p>9 PM</p>
                    </div>
                    <h4>${this._data.HourlyWeather.tempreture[6]}°</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="./assets/images/icon-overcast.webp" alt="">
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