class LoadingView {
  _parentEl = document.querySelector(".main-section");

  render() {
    this._parentEl.innerHTML = "";
    const markup = this._view();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _view() {
    return `
            <div class="first-section">
                <div class="loading loading-1">
                <div class="loading-inner">
                    <div class="dots">
                    <div class="dot dot-1"></div>
                    <div class="dot dot-2"></div>
                    <div class="dot dot-3"></div>
                    </div>
                    <h5>loading...</h5>
                </div>
                </div>

                <div class="prediction loading-prediction">
                    <div class="square Feels-Like">
                    <h4>Feels Like</h4>
                    <h1>-</h1>
                    </div>
                    <div class="square Humidity">
                    <h4>Humidity</h4>
                    <h1>-</h1>
                    </div>
                    <div class="square Wind">
                    <h4>Wind</h4>
                    <h1>-</h1>
                    </div>
                    <div class="square precipitation">
                    <h4>precipitation</h4>
                    <h1>-</h1>
                    </div>
                </div>

                <div class=" loading-forecast">
                <h3>Daily forecast</h3>
                <div class="days-Whether">
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
                    </div>
                    <div class="loading-whether-days">
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
            </div>

        `;
  }
}

export default new LoadingView();
