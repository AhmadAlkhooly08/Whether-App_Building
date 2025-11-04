
class dropDown{
    _units = document.querySelector('.units');
    _hiddenUnits = document.querySelector('.dropDown')
    _btn = document.querySelectorAll('.btn');
    constructor(){
        this._units.addEventListener('click',this.unitsDropDown.bind(this));
        // window.addEventListener('click',this.unitsDropDown.bind(this))
    }
    unitsDropDown(){
        this._hiddenUnits.classList.toggle('hidden')
    }
    closeDropdown(){
        this._hiddenUnits.classList.add('hidden');
    }

    disableBtn(){
        this._btn.forEach(btn => btn.disabled = true);
    }
    enableBtn(){
        this._btn.forEach(btn => btn.disabled = false);
    }

    unitsClick(handler){
        this._hiddenUnits.addEventListener('click',function(e){

            const clickedBtn = e.target.closest('.btn');
            const btnImg = clickedBtn.querySelector('.img-check');
            const btnActive = clickedBtn.parentElement.querySelector('.btn.active');
            const btnActiveImg = btnActive.querySelector('.img-check')

            btnActive.classList.remove('active');
            btnActiveImg.classList.add('hidden');

            clickedBtn.classList.add('active');
            btnImg.classList.remove('hidden');

            handler(clickedBtn.innerText,btnActive.innerText);
        })
    }
}

export default new dropDown()