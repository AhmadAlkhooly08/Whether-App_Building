import * as model from '../model.js'
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
        const {temp,speed,prep} = model.curUnits;
        
        this._activeBtn(temp === 'F' ? '.fahrenheit' : '.Celsius')
        this._activeBtn(speed === 'mph' ? '.mph' : '.km');
        this._activeBtn(prep === 'in' ? '.in' : '.km');
    }
    _activeBtn(selector){
        this._hiddenUnits.querySelectorAll('.btn').forEach(e =>{
            e.classList.remove('active')
            e.querySelector('.img-check').classList.add('hidden');
        })

        const el = document.querySelector(selector);
        if(el){
            el.classList.add('active');
            el.querySelector('.img-check').classList.remove('hidden');
        }

    }
    // renderActive(){
    //     this._hiddenUnits.querySelectorAll('.btn').forEach(e =>{
    //         e.classList.remove('active')
    //         e.querySelector('.img-check').classList.add('hidden');
    //     })

    //     const selector = ['.Celsius','.km' ,'.mm'];

    //     selector.forEach(btn =>{
    //         const active = document.querySelector(btn);

    //         active.classList.add('active');
    //         active.querySelector('.img-check').classList.remove('hidden')
    //     })

    // }
    unitsClick(handler){
        this._hiddenUnits.addEventListener('click',(e) =>{
            
            const allBtn = document.querySelectorAll('.btn')
            const clickedBtn = e.target.closest('.btn');
            const btnActive = clickedBtn.parentElement.querySelector('.btn.active');
            
            this.renderActive();
            // if(btnActive && btnActiveImg){
            //     btnActive.classList.remove('active');
            //     btnActiveImg.classList.add('hidden');

            //     clickedBtn.classList.add('active');
            //     btnImg.classList.remove('hidden');
            // }else{
            //     clickedBtnclassList.add('active');
            //     btnImg.classList.remove('hidden');

            //     amperialBtn.classList.remove('active');
            //     amperialBtn.querySelector('.img-check').classList.add('hidden');
            // }


            // const btnActiveArr = allBtn.map(e => e.classList.includes('active'));
            // console.log(btnActiveArr);
            handler(clickedBtn.innerText);
        })
    }
}

export default new dropDown()