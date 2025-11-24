
class SearchView{
    _parentEl = document.querySelector('.main-section')
    _SearchBar = document.querySelector('.form');
    _SearchField = document.querySelector('.text-field');
    _resault = document.querySelector('.select-City');
    keyUp(handler){
        let str=[];
        let obj = [];
        this._SearchBar.addEventListener('keyup',(e)=>{
            this._resault.classList.toggle('hidden');
            obj.push(e.key == 'Backspace' ? '' : e);
            if(e.code == `Key${e.key.toUpperCase()}`){
                str.push(e.key);
                console.log(str);
            }
            console.log(e.key);
            // const check = obj.slice().filter(el=> el.code == `Key${el.key.toUpperCase()}`);
            if(e.key == 'Backspace' && obj.slice(-1).key == str.slice(-1).key){
                obj.pop();
                str.pop();
            }

            console.log(str,obj)            

            handler(str.join(''));
        })

    }
    handler(handel){
        this._SearchBar.addEventListener('submit',(e) =>{
            e.preventDefault();
            const input = e.target.querySelector('.text-field');
            const getValue = input.value;
            console.log(getValue);

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