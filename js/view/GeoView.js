import iconSunny from '../../public/images/icon-sunny.webp';
// import iconRain from '../../images/icon-rain.webp';
// import iconDrizzle from '../../images/icon-drizzle.webp';
// import iconPartlyCloudy from '../../images/icon-partly-cloudy.webp';
// import iconStorm from '../../images/icon-storm.webp';
// import iconSnow from '../../images/icon-snow.webp';
// import iconFog from '../../images/icon-fog.webp';
// import iconOvercast from '../../images/icon-overcast.webp';
// import iconDropdown from '../../images/icon-dropdown.svg';


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
        const curWhether = this._data.CurrentWhether;
        const dayWhether = this._data.DailyWhether;
        const hourlyWhether = this._data.HourlyWether;
        return`
            <div class="first-section">
                <div class="bg-today">
                <div class="location">
                    <h2>${this._data.name ? this._data.name : curWhether.location}</h2>
                    <h4>${this._data.date}</h4>
                </div>

                <div class="temprature">
                    <img src="${iconSunny}" alt="">
                    <h1>${curWhether.Tempreture}${this._data.unit}</h1>
                </div>
                </div>
                <div class="prediction">
                    <div class="square Feels-Like">
                    <h4>Feels Like</h4>
                    <h1>${curWhether.apparentTempreture}${this._data.unit}</h1>
                    </div>
                    <div class="square Humidity">
                    <h4>Humidity</h4>
                    <h1>${curWhether.humidity}%</h1>
                    </div>
                    <div class="square Wind">
                    <h4>Wind</h4>
                    <h1>${curWhether.windSpeed} ${curWhether.SpeedUnit}</h1>
                    </div>
                    <div class="square precipitation">
                    <h4>precipitation</h4>
                    <h1>${curWhether.precipitation} ${curWhether.sembol}</h1>
                    </div>
                </div>

                <div class="daily-forecast">
                <h3>Daily forecast</h3>
                <div class="days-Whether ${this._data.unit === '°F' ? 'felsius' : ''}">
                    <div class="whether-days ${this._data.unit === '°F' ? 'hidden' : ''}">
                    <h3>${dayWhether.date[0]}</h3>
                    <img src="/images/icon-rain.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[0]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[0]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${dayWhether.date[1]}</h3>
                    <img src="/images/icon-drizzle.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[1]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[1]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${dayWhether.date[2]}</h3>
                    <img src="/images/icon-sunny.png" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[2]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[2]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${dayWhether.date[3]}</h3>
                    <img src="/images/icon-partly-cloudy.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[3]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[3]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${dayWhether.date[4]}</h3>
                    <img src="/images/icon-storm.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[4]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[4]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days">
                    <h3>${dayWhether.date[5]}</h3>
                    <img src="/images/icon-snow.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[5]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[5]}${this._data.unit}</h4>
                    </div>
                    </div>
                    <div class="whether-days ${this._data.unit === '°F' ? 'hidden' : ''}">
                    <h3>${dayWhether.date[6]}</h3>
                    <img src="public/images/icon-fog.webp" alt="">
                    <div class="days-percentege">
                        <h4>${dayWhether.maxTempreture[6]}${this._data.unit}</h4>
                        <h4>${dayWhether.minTempreture[6]}${this._data.unit}</h4>
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
                        <p>${dayWhether.date[0]}</p>
                        <img src="public/images/icon-dropdown.svg" alt="" />
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
                    <img src="/images/icon-partly-cloudy.webp" alt="">
                    <p>${hourlyWhether.time[0]} ${hourlyWhether.meridiem[0]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[0]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-overcast.webp" alt="">
                    <p>${hourlyWhether.time[1]} ${hourlyWhether.meridiem[1]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[1]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-sunny.png" alt="">
                    <p>${hourlyWhether.time[2]} ${hourlyWhether.meridiem[2]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[2]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-overcast.webp" alt="">
                    <p>${hourlyWhether.time[3]} ${hourlyWhether.meridiem[3]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[3]}${this._data.unit}</h4>
                </div>

                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-rain.webp" alt="">
                    <p>${hourlyWhether.time[4]} ${hourlyWhether.meridiem[4]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[4]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-storm.webp" alt="">
                    <p>${hourlyWhether.time[5]} ${hourlyWhether.meridiem[5]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[5]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-fog.webp" alt="">
                    <p>${hourlyWhether.time[6]} ${hourlyWhether.meridiem[6]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[6]}${this._data.unit}</h4>
                </div>
                <div class="slide">
                    <div class="img-section">
                    <img src="/images/icon-overcast.webp" alt="">
                    <p>${hourlyWhether.time[7]} ${hourlyWhether.meridiem[7]}</p>
                    </div>
                    <h4>${hourlyWhether.tempreture[7]}${this._data.unit}</h4>
                </div>

                </div>
            </div>
        `
    }
}

export default new GeoView();