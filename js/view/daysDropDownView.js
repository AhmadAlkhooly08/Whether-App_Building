
class daysDropDown{
    _parentEl= document.querySelector('.main-section');;
    _hiddenToggle;

    constructor(){

        
        document.addEventListener('load',()=>{
            this._parentEl = document.querySelector('.days-select');
            this._hiddenToggle = document.querySelector('.toggle');

            this._hiddenToggle.addEventListener('click',this.toggleClass.bind(this));
        });
    }

    toggleClass(){
        this._parentEl.addEventListener('click',(e)=>{
            const btn = e.target.closest('.toggle');

            if(btn){
                document.querySelector('.days-select').classList.toggle('hidden');
            }
        })
    }
}

export default new daysDropDown();