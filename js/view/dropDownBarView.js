
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

    renderActive(){
        this._hiddenUnits.querySelectorAll('.btn').forEach(e =>{
            e.classList.remove('active')
            e.querySelector('.img-check').classList.add('hidden');
        })

        const selector = ['.Celsius','.km' ,'.mm'];

        selector.forEach(btn =>{
            const active = document.querySelector(btn);

            active.classList.add('active');
            active.querySelector('.img-check').classList.remove('hidden')
        })
    }
    unitsClick(handler){
        this._hiddenUnits.addEventListener('click',function(e){
            
            const allBtn = document.querySelectorAll('.btn')
            console.log(allBtn);
            const clickedBtn = e.target.closest('.btn');
            const btnImg = clickedBtn.querySelector('.img-check');
            const btnActive = clickedBtn.parentElement.querySelector('.btn.active');
            const btnActiveImg = btnActive.querySelector('.img-check');
            const amperialBtn = document.querySelector('.btn_imperial')

            if(btnActive && btnActiveImg){
                btnActive.classList.remove('active');
                btnActiveImg.classList.add('hidden');

                clickedBtn.classList.add('active');
                btnImg.classList.remove('hidden');
            }else{
                clickedBtnclassList.add('active');
                btnImg.classList.remove('hidden');

                amperialBtn.classList.remove('active');
                amperialBtn.querySelector('.img-check').classList.add('hidden');
            }


            // const btnActiveArr = allBtn.map(e => e.classList.includes('active'));
            // console.log(btnActiveArr);
            handler(clickedBtn.innerText,btnActive.innerText);
        })
    }
}

export default new dropDown()