
class SearchView{
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
}

export default new SearchView();