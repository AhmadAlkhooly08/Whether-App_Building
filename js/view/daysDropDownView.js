
class daysDropDown{
    _parentEl= document.querySelector('.main-section');;
    _hiddenToggle;

    // constructor(){

    //     this.toggleClass()        
    // }

    toggleClass(handler){
        this._parentEl.addEventListener('click',(e)=>{
            const btn = e.target.closest('.toggle');

            if(btn){
                document.querySelector('.days-select').classList.toggle('hidden');
            }

            const day = e.target.closest('.day');
            const allDays = document.querySelectorAll('.day');

            if(day){
                allDays.forEach(el=>{
                    el.classList.remove('active')
                })
                day.classList.add('active');
                
                handler(day.innerText)
            }

        })
    }


}

export default new daysDropDown();