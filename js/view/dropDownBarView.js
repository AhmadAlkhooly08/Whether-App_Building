
class dropDown{
    _units = document.querySelector('.units');
    _hiddenUnits = document.querySelector('.dropDown')

    constructor(){
        this._units.addEventListener('click',this.unitsDropDown.bind(this));
        // window.addEventListener('click',this.closeDropdown.bind(this))
    }
    unitsDropDown(){
        this._hiddenUnits.classList.toggle('hidden')
    }
    closeDropdown(){
        this._hiddenUnits.classList.add('hidden');
    }

    unitsClick(){
        this._hiddenUnits.addEventListener('click',function(e){

            const clickedBtn = e.target.closest('.btn');
            const btnImg = clickedBtn.querySelector('.img-check');
            const btnActive = clickedBtn.parentElement.querySelector('.btn.active');
            const btnActiveImg = btnActive.querySelector('.img-check')

            btnActive.classList.remove('active');
            btnActiveImg.classList.add('hidden');

            clickedBtn.classList.add('active');
            btnImg.classList.remove('hidden')

        })
    }
}

export default new dropDown()