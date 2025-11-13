
class daysDropDown{
    _parentEl = document.querySelector('.days-select');
    _hiddenToggle = document.querySelector('.btn-days');

    constructor(){
        this._hiddenToggle.addEventListener('click',this.toggleClass.bind(this));
    }

    toggleClass(){
        this._parentEl.classList.toggle('hidden');
    }
}

export default new daysDropDown();