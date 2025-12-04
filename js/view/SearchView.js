
class SearchView{
    _parentEl = document.querySelector('.main-section')
    _SearchBar = document.querySelector('.form');
    _SearchField = document.querySelector('.text-field');
    _resault = document.querySelector('.select-City');
    keyUp(handler){
        this._SearchBar.addEventListener('keyup',(e)=>{

            if(e.code == `Key${e.key.toUpperCase()}` || e.code == 'Backspace'){
                handler(e.target.value);
            }
        })

    }

    renderRes(data){
        if(data.length >= 1){
            this._resault.classList.remove('hidden');
        }else{
            this._resault.classList.add('hidden');
        }
        let strBtn =[];
        data.forEach((el) => strBtn.push(el !== undefined ? `<button>${el}</button>` : ''));
        this._resault.innerHTML = strBtn?.join('');
        window.addEventListener('click',()=>{
            if(this._resault.classList.contains('hidden')) return;
            else this._resault.classList.add('hidden')
        })
    }
    getValue(handler){
        this._resault.addEventListener('click',(e)=>{
            const btn = e.target.closest(".select-City button").innerText;

            handler(btn);
        })
    }

    renewPage(){
        this._resault.classList.add('hidden');
        document.querySelector('.text-field').value = '';
        document.querySelector('.dropDown').classList.add('hidden');
    }
    handler(handel){
        this._SearchBar.addEventListener('submit',(e) =>{
            e.preventDefault();
            const input = e.target.querySelector('.text-field');
            const getValue = input.value;

            if(!getValue) return;
            handel(getValue);
            input.value = '';

        })
    }

    renderError(){
        const markup = `
            <div class="error">
                <h1>No search result found! 🚫</h1>
            </div>
        `;

        this._parentEl.innerHTML = '';
        this._parentEl.insertAdjacentHTML("afterbegin",markup)
    }
}

export default new SearchView();