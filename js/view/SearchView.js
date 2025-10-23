
class SearchView{
    _SearchBar = document.querySelector('.form');

    handler(handel){
        this._SearchBar.addEventListener('submit',function(e){
            e.preventDefault();
            const input = e.target.querySelector('.text-field');
            const getValue = input.value;
            console.log(getValue);

            handel(getValue);
        })
    }
}

export default new SearchView();