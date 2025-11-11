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

    // renderActive(){
    //     const {temp,speed,prep} = model.curUnits;
        
    //     this._hiddenUnits.querySelectorAll('.btn').forEach(e =>{
    //         e.classList.remove('active')
    //         e.querySelector('.img-check').classList.add('hidden');
    //     })
    // }
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
            const clickedBtn = e.target.closest('.btn');
            if(!clickedBtn) return;

            const parent = clickedBtn.closest('.group'); 
            if(!parent){
                handler(clickedBtn.innerText);
                return;
            };

            if(clickedBtn.classList.contains('active')) return;

            parent.querySelectorAll('.btn').forEach(el=>{
                el.classList.remove('active');
                el.querySelector('.img-check').classList.add('hidden');
            })

            clickedBtn.classList.add('active');
            clickedBtn.querySelector('.img-check').classList.remove('hidden');

            // const btnActiveArr = allBtn.map(e => e.classList.includes('active'));
            // console.log(btnActiveArr);
            handler(clickedBtn.innerText);
        })
    }
}

export default new dropDown()