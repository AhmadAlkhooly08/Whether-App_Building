
class daysDropDown{
    _parentEl= document.querySelector('.main-section');
    toggleClass(handler){
        this._parentEl.addEventListener('click',(e)=>{
            const btn = e.target.closest('.toggle');

            if(btn){
                document.querySelector('.days-select').classList.toggle('hidden');
            }

            const day = e.target.closest('.day');

            if(day){
                handler(day.innerText)
            }

        })
    }

    loading(){
        const loadingParent = document.querySelector('.second-section');
        console.log(loadingParent);
        return loadingParent.innerHTML =`
                <div class="dropDown-Days">
                <div class="row">
                    <h1>Hourly forecast</h1>
                    <div class="btn-days">
                    <button>
                        <p>-</p>
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
                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>

                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>
                <div class="slide loading-hourly">
                </div>

                </div>          
            `
    }
}

export default new daysDropDown();