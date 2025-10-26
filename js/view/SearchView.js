
class SearchView{
    _parentEl = document.querySelector('.main-section')
    _SearchBar = document.querySelector('.form');
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