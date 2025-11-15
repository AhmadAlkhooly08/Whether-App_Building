
class daysDropDown{
    _parentEl;
    _hiddenToggle;

    constructor(){
        document.addEventListener('load',()=>{
            this._parentEl = document.querySelector('.days-select');
            this._hiddenToggle = document.querySelector('.btn-days button');

            this._hiddenToggle.addEventListener('click',this.toggleClass.bind(this));
        });
    }

    toggleClass(){
        console.log(this._parentEl);
        this._parentEl.classList.toggle('hidden');
    }
}

export default new daysDropDown();