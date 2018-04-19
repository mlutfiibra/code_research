//import str from './models/Search';
////import { add as a, multiply as m, ID } from './views/searchView';
//import * as searchView from './views/searchView'
//
//console.log(`Using imported function! ${searchView.multiply(3,searchView.ID)} ${str}`);

//http://food2fork.com/api/search 
//0d456616b299aae1aaa9e8e1834d5646

import Search from './models/Search';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza'; //TODO
    
    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        
        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI;
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
